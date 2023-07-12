let areadetexto = document.getElementById("textarea");
let contador = document.getElementById("contador");
function actualizarContador() {
    let caracteres = areadetexto.value.length;
    contador.textContent = caracteres + "/" + "300";
}
textarea.addEventListener("input", actualizarContador);



