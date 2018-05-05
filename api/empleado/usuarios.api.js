const UserModel = require('./Empleados.model');

module.exports.registrar = (req, res) => {
  var newUser = new UserModel({
    cedula              :  req.body.cedula,
    foto                :  req.body.foto,
    primerNombre        :  req.body.primerNombre,
    primerApellNombreTareao      :  req.body.primerApellNombreTareao,
    segundoApellNombreTareao     :  req.body.segundoApellNombreTareao,
    correo              :  req.body.correo,
    fechaNacimiento     :  req.body.fechaNacimiento,
    tipo                :  req.body.tipo,
    listatareas       :  req.body.listatareas,
    TareaAsignada    :  req.body.TareaAsignada,
    contrasenna         :  req.body.contrasenna,
  });

  newUser.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido en NombreTarea un error en el registro de Empleados' + err});
    }else{
      res.json({success:true, msj:'Se registró el Empleado correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  UserModel.find().then((Empleados) => {
    res.send(Empleados);
  });
};

module.exports.actualizar = (req,res) => {
  UserModel.update({correo: req.body.correo}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.buscar_Empleado_por_NombreTarea = function(req, res){
  UserModel.findByNombreTarea({_NombreTarea : req.body.NombreTarea}).then(
      function(Empleado){
          res.send(Empleado);
      });
};

module.exports.agregar_tarea_convenio = function (req, res) {
  console.log('listaTareasConvenios  ' + req.body.listatareasConvenios);

  UserModel.update({ _NombreTarea: req.body._NombreTarea }, { $push: { 'listatareasConvenios': { fecha: req.body.fecha } } },
      function (error) {
          if (error) {
              res.json({ success: false, msg: 'No se ha actualizado el Empleado NombreTarea al siguiente error: ' + handleError(error) });
          } else {
              res.json({ success: true, msg: 'El Empleado ha sNombreTareao modificado con éxito' });
          }

      });

};

module.exports.agregar_tarjeta_Empleado = function (req, res) {
  console.log('listaTarjetas  ' + req.body.listaTarjetas);

  UserModel.update(
    { _NombreTarea: req.body._NombreTarea },
    {
      $push:
        {
          'listaTarjetas':
            {
              NombreTarea: req.body.NombreTarea,
              tarjetaNombreTarea: req.body.tarjetaNombreTarea
            }
        }
    },
    function (error) {
      if (error) {
        res.json({
          success: false, msg: 'No se ha actualizado el Empleado debNombreTareao al siguiente error: ' + handleError(error)
        });
      } else {
        res.json({ success: true, msg: 'El Empleado ha sNombreTareao modificado con éxito' });
      }

    });

};


module.exports.agregar_tarea = function (req, res) {
  console.log('listatareas  ' + req.body.listatareas);

  UserModel.update({ _NombreTarea: req.body._NombreTarea }, { $push: { 'listatareas': { fecha: req.body.fecha } } },
      function (error) {
          if (error) {
              res.json({ success: false, msg: 'No se ha actualizado el Empleado debNombreTareao al siguiente error: ' + handleError(error) });
          } else {
              res.json({ success: true, msg: 'El Empleado ha sNombreTareao modificado con éxito' });
          }

      });

}