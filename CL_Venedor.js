export default class CL_Venedor {
    constructor(nombre,montoVenta){
    this.nombre=nombre;
    this.montoVenta=montoVenta;
    }

    
    set nombre(n){
        this._nombre=n;
    }

    get nombre(){
        return this._nombre;
    }
    
    get montoVenta(){
        return this._montoVenta;
    }
    set montoVenta(m){
        this._montoVenta=+m;
    }
}