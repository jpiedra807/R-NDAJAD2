//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de Empleados
var TareaSchema = new mongoose.Schema({
  NombreTarea : {type : String, unique: true},
  nombre : {type : String},
  estado : {type : String},
  
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Tarea', TareaSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural