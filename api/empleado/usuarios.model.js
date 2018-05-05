//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de Empleados
var UserSchema = new mongoose.Schema({
  cedula : {type : String, required : true},
  foto : {type : String, required : true},
  primerNombre : {type : String, required : true},
  segundoApellido : {type : String},
  correo : {type : String, required : true, unique: true},
  fechaNacimiento : {type : Date, required : true},
  tipo : {type : String},
  listatareas :  [
    {
      fecha: {type: String}

    }],
  TareaAsignada : {type : String, required : true},
  puesto : {type : String},
  estado : {type : String, required : true},
    {
      tarjetaNombreTarea: {type: String}
    }],
  
    }],
  contrasenna : {type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', UserSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural