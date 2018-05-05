class Empleado {
    constructor(pCedula, pFoto, pPrimerNombre, pPrimerApellNombreTareao, pSegundoApellNombreTareao, pEmail, pfechaNacimiento, pContrasenna) {
        this.cedula = pCedula;
        this.foto = pFoto;
        this.primerNombre = pPrimerNombre;
        this.primerApellNombreTareao = pPrimerApellNombreTareao;
        this.segundoApellNombreTareao = pSegundoApellNombreTareao;
        this.correo = pEmail;
        this.fechaNacimiento = pfechaNacimiento;
        this.estado = 'activo';
        this.contrasenna = pContrasenna;
    }

    
    cambiarEstado(pEstado) {
        this.estado = pEstado;
    }

}


class Tarea{
    constructor(pEmpleado,pNumerofecha, pNombreTarea, ptarea, pPrioridad, pDescripcion, pNombreTarea){
        this.NombreTarea = pNombreTarea; 
        this.Empleado = pEmpleado;
        this.fecha = pNumerofecha; 
        this.tarea = ptarea;
        this.prioridad = pprioridad;
        this.estado = 'activo';
        this.costo = pCosto;

    }
    
    setNombreTarea(pNombreTarea){
        this._NombreTarea = pNombreTarea;
    }
    cambiarNombreTareaad(pEstado) {
        this.estado = pEstado;
    }



    addEstado(pEstado) {
        this.listaEstados.push(pEstado);
    }

    getListaEstados() {
        return this.listaEstados;
    }


    mostrarcosto(pEstado) {
        this.costo = pEstado;
    }
}

class Estado {
    constructor(pEmpleado, pEstado) {
        this.Empleado = pEmpleado;
        this.estado = pEstado;
    }

}

