//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de Empleados
var EstadoSchema = new mongoose.Schema({
    Empleado : {type : String, required : true},
    fecha : {type : Date, required : true},
    hora : {type : Date, required : true},
    estado : {type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Estado', EstadoSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural