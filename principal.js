
import CL_Venedor from "./CL_Venedor.js";
import CL_ventas from "./CL_ventas.js";

let vendedor1 = new CL_Venedor("Mary", 150);
let vendedor2 = new CL_Venedor("José", 135);
let vendedor3 = new CL_Venedor("Carlos", 160);
let vendedor4 = new CL_Venedor("Pedro", 75);

let ventasInstancia = new CL_ventasInstancia();

ventasInstancia.procesarVendedor(vendedor1);
ventasInstancia.procesarVendedor(vendedor2); 
ventasInstancia.procesarVendedor(vendedor3);
ventasInstancia.procesarVendedor(vendedor4);

let salida = document.getElementById("salida");

salida.innerHTML = `
<br> Cantidad de ventasInstancia que fueron por 100$ o menos: ${ventasInstancia.ventasInstanciaMenor()}<br>
<br> Cantidad de ventasInstancia que fueron mayores a 100$: ${ventasInstancia.ventasInstanciaMayor()}<br>
<br> Monto total de ventasInstancia: ${(ventasInstancia.montoTotal()).toFixed(2)}$
`;