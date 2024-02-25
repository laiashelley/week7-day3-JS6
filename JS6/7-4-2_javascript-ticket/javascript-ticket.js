// 2- RELLENAR TICKET DE CINE

// Tienes una imagen de ticket de entrada para el cine, vacío, y unos inputs para rellenar: se te pide el nombre, fecha y la butaca (fila y asiento). Y al darle botón 'enviar', que se muestren en la imagen del ticket de entrada las opciones elegidas por el usuario. Esto implica maquetar el ticket mediante divs y CSS (puedes usar también una imagen de fondo para el papel).

function calculoTicket(){
    let date = document.getElementById("date").value;
    let hour = document.getElementById("hour").value;
    let sala = document.getElementById("sala").value;
    let movie = document.getElementById("movie").value;
    let fila = document.getElementById("fila").value;
    let butaca = document.getElementById("butaca").value;


    document.getElementById("resultadoHora").innerHTML = hour;
    document.getElementById("resultadoSala").innerHTML = sala;
    document.getElementById("resultadoPelicula").innerHTML = movie;
    document.getElementById("resultadoFila").innerHTML = "Fila:" + fila;
    document.getElementById("resultadoButaca").innerHTML = "Butaca:" + butaca;
    document.getElementById("resultadoDia").innerHTML = date;
}