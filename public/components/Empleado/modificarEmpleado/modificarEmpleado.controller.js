(() => {
  'use strict';
  angular
    .module('RÄNDAJAD')
    .controller('controladorModificarCliente', controladorModificarCliente);

  controladorModificarCliente.$inject = ['$http', '$stateParams', '$state', '$location', 'servicioEmpleados'];

  function controladorModificarCliente($http, $stateParams, $state, $location, servicioEmpleados) {
    let vm = this;
    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pNombreTareaProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pNombreTareaProvincia == success.data[i].NombreTareaProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pNombreTareaCanton) => {
      console.log(pNombreTareaCanton);
      vm.distritos = $http({
        method: 'GET',
        url: './sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pNombreTareaCanton == success.data[i].NombreTareaCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.modificarCliente = {};

    vm.objNuevoCliente = {};

    if(servicioEmpleados.getRol() == '1') {
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      let listaEmpleados = servicioEmpleados.getEmpleados();
      for (let i = 0; i < listaEmpleados.length; i++) {
        if(listaEmpleados[i].correo == sesion.correo){
          vm.objNuevoCliente = new Empleado(listaEmpleados[i].cedula, listaEmpleados[i].foto, listaEmpleados[i].primerNombre, listaEmpleados[i].segundoNombre, listaEmpleados[i].primerApellNombreTareao, listaEmpleados[i].segundoApellNombreTareao, listaEmpleados[i].correo, listaEmpleados[i].telefono, listaEmpleados[i].fechaNacimiento, listaEmpleados[i].provincia, listaEmpleados[i].canton, listaEmpleados[i].distrito, listaEmpleados[i].direccionExacta, listaEmpleados[i].contrasenna, '1'); 
        }

      }
    }
    else {
      let objClienteAModificar = JSON.parse($stateParams.objClienteTemp);
      vm.objNuevoCliente = new Empleado(objClienteAModificar.cedula, objClienteAModificar.foto, objClienteAModificar.primerNombre, objClienteAModificar.segundoNombre, objClienteAModificar.primerApellNombreTareao, objClienteAModificar.segundoApellNombreTareao, objClienteAModificar.correo, objClienteAModificar.telefono, objClienteAModificar.fechaNacimiento, objClienteAModificar.provincia, objClienteAModificar.canton, objClienteAModificar.distrito, objClienteAModificar.direccionExacta, objClienteAModificar.contrasenna, '1');
    }

      vm.modificarCliente.cedula = vm.objNuevoCliente.cedula;
      vm.modificarCliente.foto = vm.objNuevoCliente.foto;
      vm.modificarCliente.primerNombre = vm.objNuevoCliente.primerNombre;
      vm.modificarCliente.segundoNombre = vm.objNuevoCliente.segundoNombre;
      vm.modificarCliente.primerApellNombreTareao = vm.objNuevoCliente.primerApellNombreTareao;
      vm.modificarCliente.segundoApellNombreTareao = vm.objNuevoCliente.segundoApellNombreTareao;
      vm.modificarCliente.correo = vm.objNuevoCliente.correo;
      vm.modificarCliente.telefono = vm.objNuevoCliente.telefono;
      vm.modificarCliente.fechaNacimiento = new Date(vm.objNuevoCliente.fechaNacimiento);
      vm.modificarCliente.provincia = vm.objNuevoCliente.provincia;
      vm.modificarCliente.canton = vm.objNuevoCliente.canton;
      vm.modificarCliente.distrito = vm.objNuevoCliente.distrito;
      vm.modificarCliente.direccionExacta = vm.objNuevoCliente.direccionExacta;
    

    

    vm.modifCliente = (pEmpleado) => {
      let listaEmpleados = servicioEmpleados.getEmpleados();

      listaEmpleados.forEach(objEmpleado => {
        if (objEmpleado.correo == vm.objNuevoCliente.correo) {
          objEmpleado.cedula = pEmpleado.cedula;
          objEmpleado.foto = pEmpleado.foto;
          objEmpleado.primerNombre = pEmpleado.primerNombre;
          objEmpleado.segundoNombre = pEmpleado.segundoNombre;
          objEmpleado.primerApellNombreTareao = pEmpleado.primerApellNombreTareao;
          objEmpleado.segundoApellNombreTareao = pEmpleado.segundoApellNombreTareao;
          objEmpleado.telefono = pEmpleado.telefono;
          objEmpleado.fechaNacimiento = pEmpleado.fechaNacimiento;
          objEmpleado.provincia = pEmpleado.provincia;
          objEmpleado.canton = pEmpleado.canton;
          objEmpleado.distrito = pEmpleado.distrito;
          objEmpleado.direccionExacta = pEmpleado.direccionExacta;
    

          servicioEmpleados.actualizarEmpleado(objEmpleado);

        }
      });
      swal("Edición exitosa", "Cliente modificado correctamente", "success", {
        button: "Aceptar",
      });
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      if(sesion.tipo == '5'){
        $state.go('main.listarCliente');
      }
      else{
        $state.go('main.dashboard');
      }
      
    }
  }

})();