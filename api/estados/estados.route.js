const express = require('express'),
      router = express.Router(),
      estados = require('./estados.api');

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
router.route('/save_estado')
  .post((req, res) => {
    estados.registrar(req,res);
});

/**
 * Función que obtiene todos los Empleados
 */
router.route('/get_all_estados')
  .get((req, res) => {
    estados.listarTodos(req,res);
});

/**
 * Función que actualiza los Empleados
 */
router.route('/update_estados')
  .put((req, res) => {
    estados.actualizar(req,res);
});

module.exports = router;