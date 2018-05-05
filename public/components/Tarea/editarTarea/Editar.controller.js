(() => {
  'use strict';
  angular
    .module('RÄNDAJAD')
    .controller('controladorEditar', controladorEditar);

  controladorEditar.$inject = ['$http','$stateParams', '$state', '$location', 'servicio'];

  function controladorEditar($http, $stateParams, $state, $location, servicio) {
    let vm = this;
    
  

    vm.editar = {};

    let objEditar = JSON.parse($stateParams.objTemp);

    let objNuevaTarea = new Tarea(objEditar.NombreTarea, objEditar.nombre);


    vm.editar.NombreTarea = objNuevaTarea.NombreTarea;
    vm.editar.nombre = objNuevaTarea.nombre;


    vm.cambiarEstadoTarea = (pEstado) => {
      let listaTarea = servicio.getTarea();

      listaTarea.forEach(objTarea => {
        if (objTarea.NombreTarea == objNuevaTarea.NombreTarea) {
          objTarea.cambiarEstadoTarea(pEstado);
        }
        servicio.actualizarTarea(objTarea);
        $state.go('main.listarTarea');
      });
     
    };



    vm.editTarea = (pTarea) => {
      let listaTarea = servicio.getTarea();

      listaTarea.forEach(objTarea => {
        if (objTarea.NombreTarea == objNuevaTarea.NombreTarea) {

          objTarea.NombreTarea = pTarea.NombreTarea;
          objTarea.nombre = pTarea.nombre;
   

          servicio.actualizarTarea(objTarea);
        }

      });
      swal("Edición exitosa", "Tarea Editada correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('main.listarTarea')
    }


    vm.volver = () => {
      $state.go('main.listarTarea');

    };

  }

})();