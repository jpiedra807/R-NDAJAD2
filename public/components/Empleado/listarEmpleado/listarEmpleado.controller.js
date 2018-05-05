(() => {
  'use strict'
  angular
    .module('RÄNDAJAD')
    .controller('controladorListarCliente', controladorListarCliente);

  controladorListarCliente.$inject = ['$state', '$stateParams', '$location', 'servicioEmpleados'/*, 'imageService'*/];

  function controladorListarCliente($state, $stateParams, $location, servicioEmpleados/*, imageService*/) {
    let vm = this;

    vm.listaClientes = listarClientes();
    
    vm.cambiarEstado =(pEstado, pEmpleado)=>{
      let listaEmpleados = servicioEmpleados.getEmpleados();
      let Empleado = {};
      for (let i = 0; i < listaEmpleados.length; i++) {
        if(listaEmpleados[i].correo == pEmpleado.correo){
          listaEmpleados[i].cambiarEstado(pEstado);
          Empleado = listaEmpleados[i];
        }
      }
      servicioEmpleados.actualizarEmpleado(Empleado);
      vm.listaClientes = listarClientes();
    }

    vm.modificar = (pEmpleado) =>{
      $state.go('main.modificarCliente', { objClienteTemp: JSON.stringify(pEmpleado) });
    };

    function listarClientes() {
      let listaEmpleados = servicioEmpleados.getEmpleados();
      let listaClientes = [];
      listaEmpleados.forEach(Empleado => {
        if (Empleado.tipo == '1') {
          listaClientes.push(Empleado);
        }
      });
      return listaClientes;
    }
  }
})();