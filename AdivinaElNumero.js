let numeroAleatorio;
const max = 10;
const min = 1;
numeroAleatorio = Math.floor(Math.random() * ((max - min + 1)) + min);

// // Crear el input
// const numero = document.createElement("input");

// Crear una funcion para el input y se ejecuta cuando haces clic en el botón
function comprobarIntento() {
// 1. Buscamos el input en el HTML y leemos su valor
    let cajaTexto = document.getElementById("inputNumero");
    let intentoUsuario = parseInt(cajaTexto.value); // Cambiamos el tipo de dato a int

    // 2. Buscamos el h2 donde escribiremos el resultado
    let textoResultado = document.getElementById("resultado");

    if(isNaN(intentoUsuario)) {
        textoResultado.innerText = "Numero no valido.";
        textoResultado.style.color = "red";
        return;
    }
    
    if (intentoUsuario === numeroAleatorio) {
        textoResultado.innerText = "¡Felicidades! Adivinaste.";
        textoResultado.style.color = "green";
    } else if(intentoUsuario < numeroAleatorio) {
        textoResultado.innerText = "Muy bajo";
        textoResultado.style.color = "Orange";
    } else if(intentoUsuario > numeroAleatorio) {
        textoResultado.innerText = "Muy alto";
        textoResultado.style.color = "Orange";
    } 

}
