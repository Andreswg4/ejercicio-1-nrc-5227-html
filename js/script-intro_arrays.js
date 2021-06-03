//ARREGLOS EN JAVASCRIPT
//Arreglo: Un conjunto de elementos definidos en una estructura
//DEFINICIONES
//Arreglo de Strings
var provincias = [ 'Loja','Azuay','Guayas', 'Chimborazo'];
//Arreglo de varios tipor de dato
var varios_tipos = [3, 'Juan', true, '2021-05-31'];
//Definir un arreglo por el constructor con el numero de elementos, en este caso 10
var numeros_primos = new Array(10);
//Definir un arreglo por el contructor con sus elementos
var serie_fibonacci = new Array(1,1,2,3,5,8,13,21);
//Definir un arreglo vac&iacute;o
var figuras_geometricas = new Array();

//Funci&oacute;n que imprime los arreglos
function imprimirArreglos(){
    setTimeout(function(){
        document.getElementById('arrProvincias').innerText = provincias;    
        document.getElementById('arrTipos').innerText = varios_tipos;    
        document.getElementById('arrPrimos').innerText = numeros_primos;    
        document.getElementById('arrFibonacci').innerText = serie_fibonacci;    
        document.getElementById('arrGeometricas').innerText = figuras_geometricas;    
    }, 2000);   
}

function imprimirCadaProvincia(){
    //Con forEach se va a recorrer por cada elemento del arreglo 
    provincias.forEach((x) => {
        var li = document.createElement('li'); //Crea un nuevo elemento en el DOM por su etiqueta de HTML //<li></li>        
        li.innerText = x;
        document.getElementById('ulProvincias').append(li); //Agrega contenido al elemento
    }); //El m&eacute;todo forEach es un callback, lo que quiere decir que implementa su funcionalidad dentro del mismo m&eacute;todo
}

function agregarFigura(){
    var nombre = document.getElementById('txtFigura').value;
    figuras_geometricas.push(nombre); //Agregar un elemento al arreglo
    document.getElementById('arrGeometricas').innerText = figuras_geometricas;    
    document.getElementById('txtFigura').value = '';
}

function cargarNumerosPrimos(){
    numeros_primos[0] = 1;
    numeros_primos[1] = 2;
    numeros_primos[2] = 3;
    numeros_primos[3] = 5;
    numeros_primos[4] = 7;
    numeros_primos[5] = 11;
    numeros_primos[6] = 13;
    numeros_primos[7] = 17;
    numeros_primos[8] = 19;
    numeros_primos[9] = 23;
    document.getElementById('arrPrimos').innerText = numeros_primos;
    document.getElementById('arrPrimos').append(" el arreglo tiene " + numeros_primos.length + " elementos");
}












