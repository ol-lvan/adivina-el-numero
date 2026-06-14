let numeroAleatorio;
const max = 10;
const min = 1;
numeroAleatorio = Math.floor(Math.random() * ((max - min + 1)) + min);

// // Crear el input
// const numero = document.createElement("input");

// Crear una funcion para el input y se ejecuta cuando haces clic en el botón
function comprobarIntento() {
// Buscamos el input en el HTML y leemos su valor
    let cajaTexto = document.getElementById("inputNumero");
    let intentoUsuario = parseInt(cajaTexto.value); // Cambiamos el tipo de dato a int

    // Buscamos el h2 donde escribiremos el resultado
    let textoResultado = document.getElementById("resultado");

    // Validamos si el intento del usuario esta vacio
    if(isNaN(intentoUsuario)) {
        textoResultado.innerText = "Numero no valido.";
        textoResultado.style.color = "red";
        return;
    }

    // Validamos si el intento del usuario es igual al numero aleatorio
    if (intentoUsuario === numeroAleatorio) {
        textoResultado.innerText = "¡Felicidades! Adivinaste."; // Mostrar el texto en la pagina
        textoResultado.style.color = "green"; // Asignarle un color al texto
    } 
        // Validamos si el intento del usuario es menor al numero aleatorio
    else if(intentoUsuario < numeroAleatorio) {
        textoResultado.innerText = "Muy bajo";
        textoResultado.style.color = "Orange";
    } 
        // Validamos si el intento del usuario es mayor al numero aleatorio
    else if(intentoUsuario > numeroAleatorio) {
        textoResultado.innerText = "Muy alto";
        textoResultado.style.color = "Orange";
    } 

}
