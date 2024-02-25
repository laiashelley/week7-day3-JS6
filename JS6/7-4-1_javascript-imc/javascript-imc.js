// 1- CALCULO PESO IDEAL

// Pides al usuario su altura y peso. Con un botón, hacer que calcule el peso ideal y lo muestre en pantalla, del tipo: para la altura X y el peso Y, tu peso ideal sería: Z .

// Usar inputs para pedir los datos, y divs para mostrar el resultado.

// “Para conocer cuál es tu peso ideal, deberás medir tu altura siempre en metros y tu peso en kilos. Una vez hecho, realiza una operación simple: divide tu peso entre tu altura al cuadrado para obtener el IMC (indice de masa corporal). Si tu IMC es inferior a 18.5, se podría considerar que estás por debajo del peso recomendado.”


function calculoImc(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    let calculo = (peso / altura**2).toFixed(2);

    if(calculo <= 16){
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Infrapeso: Delgadez Severa";
    } else if (calculo <= 17){
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Infrapeso: Delgadez Moderada";
    } else if (calculo <= 19){
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Infrapeso: Delgadez Aceptable";
    } else if (calculo <= 25){
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Peso Normal";
    } else if (calculo <= 30){
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Sobrepeso";   
    } else if (calculo <= 35){
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Obeso: Tipo I";
    } else if (calculo <= 40){
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Obeso: Tipo II";
    } else if (calculo > 40) {
        document.getElementById("resultadoEscalado").innerHTML = "Te encuentras en: " + "Obeso: Tipo III";
    } 

    document.getElementById("resultadoImc").innerHTML = "Tu IMC es: " + calculo;
}
