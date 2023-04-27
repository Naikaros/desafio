// La letra "e" es convertida para "enter"
// La letra "o" es convertida para "ober"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "u" es convertida para "ufat"

function encriptar() {
    var porEncriptar = document.getElementById("txt-encriptar").value;

    if (porEncriptar.length === 0) {
        Swal.fire({
            icon: "error",
            text: "El campo de texto está vacio",
            customClass: 'alerta-texto'
        })
        return;
    }
    if (/[A-ZáéíóúÁÉÍÓÚ]/.test(porEncriptar)) {
        Swal.fire({
            icon: "error",
            text: "Solo letras minusculas y sin tildes.",
            customClass: 'alerta-texto'
        })
        return;
    }

    var encriptando = porEncriptar
    .replace(/e/gm, "enter")
    .replace(/o/gm, "ober")
    .replace(/i/gm, "imes")
    .replace(/a/gm, "ai")
    .replace(/u/gm, "ufat");

    document.getElementById("txt-resultado").value = encriptando;
    cambioEtapa();
}

function desencriptar() {
    var porDesencriptar = document.getElementById("txt-encriptar").value;

    if (/[A-áéíóúZÁÉÍÓÚ]/.test(porDesencriptar)) {
        alert("El texto debe estar en minúsculas y sin tildes");
        return;
    }

    var desencriptar = porDesencriptar
    .replace(/enter/gm, "e")
    .replace(/ober/gm, "o")
    .replace(/imes/gm, "i")
    .replace(/ai/gm, "a")
    .replace(/ufat/gm, "u");

    document.getElementById("txt-resultado").value = desencriptar;
    cambioEtapa();
}

function cambioEtapa() {
    document.getElementById("primera-etapa").style.display = "none";
    document.getElementById("segunda-etapa").style.display = "flex";
}

function copiarTexto(){
    var contenidoTexto = document.getElementById("txt-resultado");
    navigator.clipboard.writeText(contenidoTexto.value);
}

var btn1 = document.getElementById("btn-encriptar");
btn1.onclick = encriptar;

var btn2 = document.getElementById("btn-desencriptar");
btn2.onclick = desencriptar;

var btn3 = document.getElementById("copiar");
btn3.onclick = copiarTexto;