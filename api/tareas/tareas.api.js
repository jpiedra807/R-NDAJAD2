const TareaModel = require('./Tarea.model');

module.exports.registrar = (req, res) => {
  var newTarea = new TareaModel({
    NombreTarea              :  req.body.NombreTarea,
    nombre      :  req.body.nombre,
    estado           :  req.body.estado,
  });

  newTarea.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido en NombreTarea un error en el registro de Tarea' + err});
    }else{
      res.json({success:true, msj:'Se registró la Tarea correctamente'});
    }
  });
};

module.exports.get_all_Tareaes = (req,res) => {
  TareaModel.find().then((Tareaes) => {
    res.send(Tareaes);
  });
};

module.exports.actualizar_Tarea = (req,res) => {
  TareaModel.update({NombreTarea: req.body.NombreTarea}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.buscar_Tarea_NombreTarea = function(req, res){
  TareaModel.findByNombreTarea({_NombreTarea : req.body.NombreTarea}).then(
      function(Tarea){
          res.send(Tarea);
      });
};



