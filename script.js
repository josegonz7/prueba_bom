
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

function Iniciar() {
    let segundos = 30;
    let contador = segundos;
    const interval = setInterval(() => {
        console.log(contador);
        contador--;
    }, 1000);
    if (segundos == 0) {
        window.alert("ha llegado a cero");
    } 
}

function Detener() {
    window.location.reload();
}

// ejercicio 5

function Abrir() {
    window.open("https://google.com")
}

function Cerrar() {
    window.close();
}

//ejercicio 6

function Fondo() {
    window.confirm("quieres cambiar el fondo?");
    const mensaje = window.prompt("dime un color");
    if (mensaje == "") {
        window.alert("no has introducido el color");
        const mensaje = window.prompt("dime un color");
    } else {
        document.body.style.background = mensaje;
    }
}

//ejercicio 7

function Saluda() {
    const mensaje = window.prompt("dime tu nombre");
    if (mensaje == "") {
        window.alert("no has introducido el nombre");
        const mensaje = window.prompt("dime tu nombre");
    } else {
        window.alert("bienvenido " + mensaje);
    }
}

//ejercicio 8

function tama() {
    if (innerWidth <= 768) {
        window.alert("ventana pequeña");
    } else {
        window.alert("Ventana grande");
    }
    document.getElementById("tama").textContent = window.innerWidth;

}