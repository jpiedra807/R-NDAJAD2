const express = require('express'),
      router = express.Router(),
      Tareaes = require('./Tareaes.api');

/**
 * 
 */
router.param('NombreTarea', (req, res, next, NombreTarea) => {
  req.body.NombreTarea = NombreTarea;
  next();
});

/**
 * Función que se encarga de registrar Tareaes dentro de la DB
 */
router.route('/save_Tarea')
  .post((req, res) => {
    Tareaes.registrar(req,res);
});

/**
 * Función que obtiene todos las Tareaes
 */
router.route('/get_all_Tarea')
  .get((req, res) => {
    Tareaes.get_all_Tarea(req,res);
});

/**
 * Función que actualiza las Tareaes
 */
router.route('/update_Tareaes')
  .put((req, res) => {
    Tareaes.actualizar_Tarea(req,res);
});

router.route('/buscar_Tarea_NombreTarea')
    .post(function(req, res){
        Tareaes.buscar_Tarea_NombreTarea(req, res);
    });

module.exports = router;