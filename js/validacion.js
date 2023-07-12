const nombre = document.getElementById("nombre");
nombre.addEventListener("blur", () => {
    if (nombre.validity.patternMismatch || nombre.validity.tooLong) {
        nombre.setCustomValidity("Debe contener máximo 50 caracteres y solo debe incluir letras");
    } else {
        nombre.setCustomValidity("");
    }
});

const telefono = document.getElementById("telefono");
telefono.addEventListener("input", () => {
    if (telefono.validity.patternMismatch) {
        telefono.setCustomValidity("Su teléfono debería tener entre 7-10 digitos y no debe contener espacios ni prefijos");
    } else {
        telefono.setCustomValidity("");
    }
});

const email = document.getElementById("email");
email.addEventListener("input", () => {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Su correo debe contener el caracter especial (@) seguido de un dominio o proveedor seguido de un punto(.)");
    } else {
        email.setCustomValidity("");
    }
});

const asunto = document.getElementById("asunto");
asunto.addEventListener("input", () => {
    if (asunto.validity.patternMismatch) {
        asunto.setCustomValidity("Debe contener un máximo de 50 caracteres");
    } else {
        asunto.setCustomValidity("");
    }
});

const textarea = document.getElementById("textarea");
textarea.addEventListener("input", () => {
    if (textarea.validity.patternMismatch) {
        textarea.setCustomValidity("Debe contener un máximo de 300 caracteres");
    } else {
        textarea.setCustomValidity("");
    }
});




