const dias = document.getElementsByClassName("dias__dia");
const horasHtml = document.querySelector(".reloj__hora");
const minutosHtml = document.querySelector(".reloj__minuto");
const segundosHtml = document.querySelector(".reloj__segundo")
const dot = document.getElementsByClassName("reloj_dot");
const lunes = document.querySelector("#lunes");
const martes = document.querySelector("#martes");
const miercoles = document.querySelector("#miercoles");
const jueves = document.querySelector("#jueves");
const viernes = document.querySelector("#viernes");
const sabado = document.querySelector("#sabado");
const domingo = document.querySelector("#domingo");


const mostrarTiempo = () => {
const tiempo = new Date();

const horas = tiempo.getHours().toString().padStart(2, "0");
const minutos = tiempo.getMinutes().toString().padStart(2, "0");
const segundos = tiempo.getSeconds().toString().padStart(2, "0");

horasHtml.textContent = horas;
minutosHtml.textContent = minutos;
segundosHtml.textContent = segundos;
};

setInterval(mostrarTiempo, 1000)

const mostrarDia = () => {
    const dias = new Date();

    const dia = dias.getDay()
    if(dia === 1) {
        lunes.style.textShadow = "0 0 15px rgb(255, 255, 255), 0 0 15px rgba(10,175, 230,0)"
        lunes.style.color ="#ffffff";
        lunes.innerHTML = "<strong>Lunes</strong>"
    } else if (dia === 2) {
        martes.style.textShadow = "0 0 15px rgb(255, 255, 255), 0 0 15px rgba(10,175, 230,0)"
        martes.style.color ="#ffffff";
        martes.innerHTML = "<strong>Martes</strong>"
    } else if(dia === 3) {
        miercoles.style.textShadow = "0 0 15px rgb(255, 255, 255), 0 0 15px rgba(10,175, 230,0)"
        miercoles.style.color ="#ffffff";
        miercoles.innerHTML = "<strong>Miercoles</strong>"
    } else if(dia === 4) {
        jueves.style.textShadow = "0 0 15px rgb(255, 255, 255), 0 0 15px rgba(10,175, 230,0)"
        jueves.style.color ="#ffffff";
        jueves.innerHTML = "<strong>Jueves</strong>"
    } else if(dia === 5) {
        viernes.style.textShadow = "0 0 15px rgb(255, 255, 255), 0 0 15px rgba(10,175, 230,0)"
        viernes.style.color ="#ffffff";
        viernes.innerHTML = "<strong>Viernes</strong>"
    } else if (dia === 6) {
        sabado.style.textShadow = "0 0 15px rgb(255, 255, 255), 0 0 15px rgba(10,175, 230,0)"
        sabado.style.color ="#ffffff";
        sabado.innerHTML = "<strong>Sábado</strong>"
    } else if (dia === 7) {
        domingo.style.textShadow = "0 0 15px rgb(255, 255, 255), 0 0 15px rgba(10,175, 230,0)"
        domingo.style.color ="#ffffff";
        domingo.innerHTML = "<strong>Domingo</strong>"
    };
}

setInterval(mostrarDia, 1000);