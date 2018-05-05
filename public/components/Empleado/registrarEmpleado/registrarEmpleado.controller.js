(() => {
  'use strict'
  angular
    .module('RÄNDAJAD')
    .controller('controladorRegistrarClientes', controladorRegistrarClientes);

  controladorRegistrarClientes.$inject = ['$http','$state', '$stateParams', '$location', 'servicioUsuarios', 'imageService', 'servicioSucursales', 'Upload', 'NgMap'];

  function controladorRegistrarClientes($http ,$state, $stateParams, $location, servicioUsuarios, imageService, servicioSucursales, Upload, NgMap) {
    let vm = this;

    //da error y no llena los data list cuando no hay un rol seleccionado
    // vm.rol = servicioUsuarios.getRol();
    vm.listaClientes = listarClientes();
    vm.nuevoCliente = {};
    

/*
        var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }

    
    NgMap.getMap("map").then(function (map) {
      vm.map = map;
    });

    vm.callbackFunc = function (param) {
      vm.latitude = vm.map.getCenter().lat();
      vm.longitude = vm.map.getCenter().lng();
    };
    });*/
/*
    vm.x = document.getElementById("demo");
    vm.getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(vm.showPosition);
      } else {
        vm.x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    vm.showPosition = (position) => {
      vm.x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }*/
  
    /*initMap();
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
      });
      var infoWindow = new google.maps.InfoWindow({ map: map });

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          map.setCenter(pos);
        }, function () {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    }*/

    NgMap.getMap("map").then(function(map) {
      vm.map = map;
    });


    vm.callbackFunc = function(param) {
      console.log('I know where '+ param +' are. ' + vm.message);
      console.log('You are at' + vm.map.getCenter());
    };

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    }


    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      console.log(pidCanton);
      vm.distritos = $http({
        method: 'GET',
        url: './sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }


    vm.editCliente = (pUsuario) => {
      $state.go('editarCliente', { objClienteTemp: JSON.stringify(pUsuario) });

    };

    servicioSucursales.listarSucursalesJson();
    vm.listaSucursales = servicioSucursales.getSucursal();

    vm.cloudObj = imageService.getConfiguration();

    vm.preRegistrarCliente = (pnuevoUsuario) => {
      vm.cloudObj.data.file = pnuevoUsuario.foto[0];
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.registrarCliente(pnuevoUsuario, data.url);
     });
    }

    vm.registrarCliente = (pNuevoUsuario, urlImagen) => {
      let objNuevoCliente = new Usuario(pNuevoUsuario.cedula, urlImagen, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, pNuevoUsuario.contrasenna, '1', pNuevoUsuario.sucursalAsignada);

      let registro = servicioUsuarios.addUsuario(objNuevoCliente);

      if (registro == 'Se registró el usuario correctamente') {
        let sesion = JSON.parse(sessionStorage.getItem('sesion'));
        if (sesion == null || sesion.tipo != '5') {

          swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
            button: "Aceptar",
          });
          $location.path('/logIn');
        }
        else {
          swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
            button: "Aceptar",
          });
          $location.path('/main/listarCliente');
        }

      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }


    function listarClientes() {
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaClientes = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == '1') {
          listaClientes.push(usuario);
        }
      });
      return listaClientes;
    }

    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
  }
})();