/* Funci&oacute;n registra la hora de acceso a la p&aacute;gina */
function logAccess(name){
    var hoy = new Date();
    console.log('Acceso registrado a ' + name);
    console.log(hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds());
}