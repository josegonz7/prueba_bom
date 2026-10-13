
// ejercicio 1
document.getElementById("url").textContent = window.location.href;
document.getElementById("info").textContent = window.navigator.userAgent;
document.getElementById("tam").textContent = window.innerWidth + " " + window.innerHeight;
document.getElementById("idioma").textContent = window.navigator.language;

//ejercicio 2

function tam() {
    window.alert("anchura: " + window.screen.width + " altura: " + window.screen.height);
}

//ejercicio 3
function atras() {
    window.history.back();
}

function recargar() {
    window.location.reload();
}

//ejercicio 4

function cont() {
    let segundos = 30;
    let contador = segundos;

    const interval = setInterval(() => {
        console.log(contador);
        contador--;
    }, 1000);
}

function Iniciar() {
    window.setTimeout(() => console.log(cont()), 2000);
}

function Detener() {

}