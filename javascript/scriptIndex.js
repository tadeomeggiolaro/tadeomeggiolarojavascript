
let primerNombreApellido = prompt("Ingrese su nombre y apellido");
let prestamo = prompt ("Ingrese monto a solicitar hasta $30.000");

while (prestamo < 100 || prestamo > 30000){
    prestamo = prompt ("Ingrese monto a solicitar hasta $30.000");
};
const MENSAJE = validacionPrestamo(prestamo);
alert(MENSAJE)

function validacionPrestamo (prestamo){
    if (prestamo == 30000) return "Felicitaciones!! " +primerNombreApellido + " Es el prestamo mas grande que hace la empresa queremos felicitarlo y beneficiarlo con ademas de 24 cuotas,tenga 36 cuotas por si elije devolver el dinero de esa forma"
    if (prestamo < 30000 && prestamo >= 20000 ) return "Hola sr. " + primerNombreApellido +". Usted solicito un prestamo de " + prestamo + " y tiene para devolver el dinero en 12 o 24 coutas"
    if (prestamo <= 10000 && prestamo >= 100) return "Hola sr. " + primerNombreApellido +". Usted solicito un prestamo de " + prestamo + " y tiene para devolver el dinero en 12"
};
