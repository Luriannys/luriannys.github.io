let contador = 0;

let lista = [];

document.getElementById("entrada1").addEventListener("keyup", habilitarStart);
document.getElementById("entrada2").addEventListener("keyup", habilitarStart);
document.getElementById("entrada3").addEventListener("keyup", habilitarStart);
document.getElementById("entrada4").addEventListener("keyup", habilitarStart);
document.getElementById("size").addEventListener("keyup", habilitarStart);
document.getElementById("start").addEventListener("click", comenzar);

//Llenar cartones
function cartonBingo(){
    
}

//Llenar lista de números de bingo
function listNumBingo(){
    for (let i = 1; i <= 50; i++) {
        lista.push(i);
}
}

//Hallar indice numero de bingo
function indexNum(){
    let randomIndex = Math.floor(Math.random() * lista.length);
    return randomIndex;
}

//Hallar numero de bingo
function numBingo(){
    let randomNum = lista[indexNum()]
    return randomNum;
}

//Eliminar numero de la lista
function delNumBingo(){
    let x = indexNum;
    lista.splice(x, 1);
}

//Habilitar botón Comenzar
function habilitarStart() {
    const entrada1 = document.getElementById("entrada1");
    const entrada2 = document.getElementById("entrada2");
    const entrada3 = document.getElementById("entrada3");
    const entrada4 = document.getElementById("entrada4");
    const size = document.getElementById("size");
    const button = document.getElementById("start");

    if (entrada1.value.trim() !== "" && entrada2.value.trim() !== "" && entrada3.value.trim() !== "" && entrada4.value.trim() !== "" && (size.value.trim() === "3" || size.value.trim() === "4" || size.value.trim() === "5") ) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', "true");
    }
}

function contar() {
    contador++;
}

function comenzar() {
    document.querySelector('.parte1').style.visibility = 'hidden';
    document.querySelector('.parte2').style.visibility = 'visible';
    console.log("NADA");
}