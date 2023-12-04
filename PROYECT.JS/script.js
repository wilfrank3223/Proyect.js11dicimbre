// Saldo inicial
let saldo = 1000;

// Función para realizar acciones del cajero automático
function realizarAccion() {
    // Obtiene la opción seleccionada por el usuario desde un input en el formulario
    const opcion = parseInt(document.getElementById("opcion").value);

    // Evalúa la opción seleccionada mediante un switch
    switch (opcion) {
        // Caso 1: Ingresar dinero en la cuenta
        case 1:
            // Solicita al usuario cuánto dinero desea ingresar y lo suma al saldo
            const extra = parseFloat(prompt("¿Cuánto dinero desea ingresar?"));
            saldo += extra;
            // Muestra el mensaje con el nuevo saldo
            mostrarMensaje(`Dinero en la cuenta: ${saldo}`);
            break;

        // Caso 2: Retirar dinero de la cuenta
        case 2:
            // Solicita al usuario cuánto dinero desea retirar
            const retirar = parseFloat(prompt("¿Cuánto dinero desea retirar?"));
            // Verifica si hay suficiente saldo para realizar el retiro
            if (retirar > saldo) {
                mostrarMensaje("No tiene esa cantidad de dinero");
            } else {
                // Resta el monto retirado al saldo
                saldo -= retirar;
                // Muestra el mensaje con el nuevo saldo
                mostrarMensaje(`Dinero en la cuenta: ${saldo}`);
            }
            break;

        // Caso 3: Mostrar dinero en la cuenta
        case 3:
            // Muestra el mensaje con el saldo actual
            mostrarMensaje(`Dinero en la cuenta: ${saldo}`);
            break;

        // Caso 4: Salir del programa
        case 4:
            // Muestra un mensaje de despedida
            mostrarMensaje("Gracias por utilizar su cajero automático");
            break;

        // Opción por defecto: Mensaje de error si la opción no es válida
        default:
            mostrarMensaje("Error, se equivocó de opción de menú");
            break;
    }
}

// Función para mostrar mensajes en el documento HTML
function mostrarMensaje(mensaje) {
    // Obtiene el elemento con el id "acciones" en el HTML
    const acciones = document.getElementById("acciones");
    // Actualiza el contenido del elemento con un nuevo mensaje en formato de párrafo
    acciones.innerHTML = `<p>${mensaje}</p>`;
}
