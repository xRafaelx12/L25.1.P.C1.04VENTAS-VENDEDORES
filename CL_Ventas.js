export default class CL_Ventas{
    constructor(){
        this.contVentasMayor = 0;
        this.contVentasMenor = 0;
        this.acVentas = 0;
    }
    ventasMayor(){
        return this.contVentasMayor;
    }

    ventasMenor(){  
        return this.contVentasMenor;
    }
    montoTotal(){
        return this.acVentas;
    }

    procesarVendedor(vended){
        this.acVentas += vended.montoVenta;
        if(vended.montoVenta <=100){
            this.contVentasMenor++;
        }
        else{
            this.contVentasMayor++;
        }
        
    }
}