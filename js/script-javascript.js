/* Funci&oacute;n que cambia el titulo de txtEjemplo y desaparece el bot&oacute;n  */
function changeTitle(){    
    document.getElementById('txtEjemplo').innerText = 'Nuevo t&iacute;tulo';
    document.getElementById('btnClick').remove();
    document.getElementById('txtTitulo').innerText = 'JavaScript';
}

function operar(tipo){    
    var t1 = document.getElementById('txtNumero1').value;
    var t2 = document.getElementById('txtNumero2').value;
    var n1 = parseInt(t1); //Convierte el valor String en Integer
    var n2 = parseInt(t2); //Convierte el valor String en Integer

    document.getElementById('txtResultadoSuma').value = sumar(n1, n2);    
    document.getElementById('txtResultadoResta').value = restar(n1, n2);    
    document.getElementById('txtResultadoMulti').value = multi(n1, n2);    
    document.getElementById('txtResultadoDivi').value = divi(n1, n2);        
    document.getElementById('txtDescripcion').innerHTML = tipo;
}

function sumar(n1, n2){    
    console.log('Sumar: ' + n1 + '+' + n2);
    var r = n1 + n2; 
    return r;
}

function restar(n1, n2){    
    console.log('Restar: ' + n1 + '-' + n2);
    var r = n1 - n2;
    return r;     
}

function multi(n1,n2){
    var r = n1 * n2;
    return r;
}

function divi(n1,n2){
    var r = n1 / n2;
    return r;
}





