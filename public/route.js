(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvNombreTarea', '$urlRouterProvNombreTarea'];

  function routing($stateProvNombreTarea, $urlRouterProvNombreTarea, $oclazyLoad) {

   

      .state('main', {
        url: '/main',
        templateUrl: './components/main/main.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/main/main.controller.js')
          }]
        },
        controller: 'controladorMain',
        controllerAs: 'vm'
      })

      $stateProvNombreTarea
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: './components/main/dashboard/mainDashboard.view.html',
        data:{
          pageTitle: 'Dashboard'
        }
      })

      .state('registrarempleado', {
        url: '/registrarempleado',
        templateUrl: './components/Empleados/empleado/registrarempleado/registrarempleado.view.html',
        data:{
          pageTitle: 'Registro empleado'
        },
        params: {
          objempleadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/Empleados/empleado/registrarempleado/registrarempleado.controller.js')
          }]
        },
        controller: 'controladorRegistrarempleados',
        controllerAs: 'vm'
      })

      .state('main.registrarempleadoAdmin', {
        url: '/registrarempleadoAdmin',
        templateUrl: './components/Empleados/empleado/registrarempleado/registrarempleadoAdmin.view.html',
        data:{
          pageTitle: 'Registro empleado'
        },
        params: {
          objempleadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/Empleados/empleado/registrarempleado/registrarempleado.controller.js')
          }]
        },
        controller: 'controladorRegistrarempleados',
        controllerAs: 'vm'
      })

      .state('main.registrarempleadoTarea', {
        url: '/registrarempleadoTarea',
        templateUrl: './components/Empleados/empleado/registrarempleado/registrarempleado.view.html',
        data:{
          pageTitle: 'Registro empleado'
        },
        params: {
          objempleadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/Empleados/empleado/registrarempleado/registrarempleado.controller.js')
          }]
        },
        controller: 'controladorRegistrarempleados',
        controllerAs: 'vm'
      })
      
      .state('main.listarempleado', {
        url: '/listarempleado',
        templateUrl: './components/Empleados/empleado/listarempleado/listarempleado.view.html',
        data:{
          pageTitle: 'Lista de empleados'
        },
        params: {
          objempleadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/Empleados/empleado/listarempleado/listarempleado.controller.js')
          }]
        },
        controller: 'controladorListarempleado',
        controllerAs: 'vm'
      })
      .state('main.modificarempleado', {
        url: '/modificarempleado',
        templateUrl: './components/Empleados/empleado/modificarempleado/modificarempleado.view.html',
        data:{
          pageTitle: 'Modificar empleado'
        },
        params: {
          objempleadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/Empleados/empleado/modificarempleado/modificarempleado.controller.js')
          }]
        },
        controller: 'controladorModificarempleado',
        controllerAs: 'vm'
      })

      

      .state('registrarEmpleados', {
        url: '/registrarEmpleados',
        templateUrl: './components/admin/registrarEmpleados.view.html',
        data:{
          pageTitle: 'Registro Empleados'
        },
        params: {
          objEmpleadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/registrarEmpleados.controller.js')
          }]
        },
        controller: 'controladorRegistrarEmpleados',
        controllerAs: 'vm'
      })

      .state('editarEmpleados', {
        url: '/editarEmpleados',
        templateUrl: './components/admin/editarEmpleados.view.html',
        data:{
          pageTitle: 'Editar Empleados'
        },
        params: {
          objEmpleadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/editarEmpleados.controller.js')
          }]
        }, 
        controller: 'controladorEditarEmpleados',
        controllerAs: 'vm',
      })

      
      
      .state('admin', {
        url: '/admin',
        templateUrl: './components/admin/admin.view.html',
        data:{
          pageTitle: 'Registro admin'
        },
        params: {
          objEmpleadoTemp:''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/admin.controller.js')
          }]
        },
        controller: 'controladorAdmin',
        controllerAs: 'vm'
      })
  
      

     
       .state('main.listaEstados', {
        url: '/listaEstados',
        templateUrl: './components/tareas/listaEstadostareasAdmin/listaEstadostareas.view.html',
        data:{
          pageTitle: 'Filtrar Estados'
        },
        params: {
          objEstadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tareas/listaEstadostareasAdmin/listaEstadostareas.controller.js')
          }]
        },
        controller: 'controladorListaEstados',
        controllerAs: 'vm'
      })
    

      .state('main.Tarea', {
        url: '/Tarea',
        templateUrl: './components/Tarea/registrarTarea/TareaRegistrar.view.html',
        data:{
          pageTitle: 'Registrar Tarea'
        },
        params: {
          objTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/Tarea/registrarTarea/TareaRegistrar.controller.js')
          }]
        },
        controller: 'controladorTarea',
        controllerAs: 'vm'
      })

    

    $urlRouterProvNombreTareaer.otherwise('/');
  };

})();
