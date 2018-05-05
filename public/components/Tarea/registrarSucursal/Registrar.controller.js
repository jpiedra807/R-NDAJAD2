(() => {
  'use strict';
  angular
    .module('RÄNDAJAD')
    .controller('controladorTarea', controladorTarea);

    controladorTarea.$inject = ['$http', '$state','$scope','servicio', 'servicioEmpleados']

  function controladorTarea($http, $state, $scope, servicio,servicioEmpleados) {
    let vm = this;
    
    vm.nuevaTarea = {};
    vm.listaTareaes = listarTareaes();
    
    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success)   => {
      vm.provincias = success.data;
      console.log(' vm.provincias',  vm.provincias);

    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pNombreTareaProvincia) => {
      console.log('pNombreTareaProvincia', pNombreTareaProvincia);
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success)  => {
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
      }).then((success)  => {
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

    listarTareaes();

    vm.registrarTarea = (pnuevaTarea) => {

      let objNuevaTarea = new Tarea(pnuevaTarea.NombreTarea, pnuevaTarea.nombre, pnuevaTarea.provincia, pnuevaTarea.canton, pnuevaTarea.distrito, pnuevaTarea.telefono, pnuevaTarea.horario, pnuevaTarea.latitud, pnuevaTarea.longitud);

      let registro = servicio.addTarea(objNuevaTarea);

      if (registro) {
        swal("Registro exitoso", "La Tarea ha sNombreTareao registrada correctamente", "success", {
          button: "Aceptar",
        });
      } else {
        swal("Registro fallNombreTareao", "Ha ocurrNombreTareao un error, intente nuevamente", "error", {
          button: "Aceptar",

        });

      }
      vm.nuevaTarea = null;
    
    };
    

    function listarTareaes() {
      vm.listaTareaes = servicio.getTarea();
    }

    
  }
})();
