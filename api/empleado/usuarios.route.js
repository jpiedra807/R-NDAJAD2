const express = require('express'),
      router = express.Router(),
      users = require('./Empleados.api');

/**
 * 
 */
router.param('NombreTarea', (req, res, next, NombreTarea) => {
  req.body.NombreTarea = NombreTarea;
  next();
});


/**
 * Función que se encarga de registrar los Empleados dentro del local storage
 */
router.route('/save_user')
  .post((req, res) => {
    users.registrar(req,res);
});

/**
 * Función que obtiene todos los Empleados
 */

router.route('/get_all_users')
  .get((req, res) => {
    users.listarTodos(req,res);
});

/**
 * Función que actualiza los Empleados
 */

router.route('/update_user')
  .put((req, res) => {
    users.actualizar(req,res);
});

router.route('/buscar_user_NombreTarea')
  .post(function (req, res) {
    users.buscar_Empleado_por_NombreTarea(req, res);
  });

router.route('/agregar_tarea_convenio')
  .post(function (req, res) {
    users.agregar_tarea_convenio(req, res);
  });

  router.route('/agregar_tarjeta_Empleado')
.post(function(req, res){
    users.agregar_tarjeta_Empleado(req, res);
});

router.route('/agregar_tarea')
  .post(function (req, res) {
    users.agregar_tarea(req, res);
  });

  router.route('/buscar_tarjeta_NombreTarea')
  .get(function(req, res){
      users.buscar_tarjeta_por_NombreTarea(req, res);
  });
module.exports = router;