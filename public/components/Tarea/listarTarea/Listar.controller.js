(() => {
  'use strict'
  angular
    .module('RÄNDAJAD')
    .controller('controladorTareaListar', controladorTareaListar);
    
    controladorTareaListar.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicio']

      function controladorTareaListar($http, $state, $scope, $location,$stateParams, servicio) {
        let vm = this;

        listarTareaes();
        
        
        vm.editTarea = (pTarea) => {
          $state.go('main.editares', {objTemp: JSON.stringify(pTarea) });
    
        };
    
         vm.listaTareaes = listarTareaes();

 
        function listarTareaes(){
        let listaTareaes = servicio.getTarea();

        return listaTareaes;
      }

    }
 })();