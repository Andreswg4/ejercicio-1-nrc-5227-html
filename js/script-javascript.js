/* Función que cambia el titulo de txtEjemplo y desaparece el botón  */
function changeTitle(){    
    document.getElementById('txtEjemplo').innerText = 'Nuevo título';
    document.getElementById('btnClick').remove();
    document.getElementById('txtTitulo').innerText = 'JavaScript';
}