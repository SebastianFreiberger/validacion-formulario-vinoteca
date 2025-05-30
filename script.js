const submitFunction = (event) => {
    if(!validarFormulario()) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'DNI: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n'   
        );
    }
    event.preventDefault(); // prevee que se actualice la web
    const valido = validarFormulario(); // esto será true o false según sea válido o no el formulario
}

document.getElementById('formulario').addEventListener('submit', submitFunction); // escucha el envio del formulario


function validarFormulario() {

    // esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');    
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); // error + id con la primera en mayuscula
        if(campo.value.length == '') {
            mostrarError(errorCampo, 'Este campo es requerido!');
            validacionCorrecta = false;
        } else if(campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo tiene que tener al menos 3 caracteres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    })

    // esto valida los campos de email
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // este regex valida que el formato del email sea valido -> regex típico de email para validarlos
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, 'Ingrese un correo electrónico válido!')
    }

    // validacion de edad

    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');    

    if(edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor a 18 años!')
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    // validacion de la actividad

    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if(actividad.value == '') {
        mostrarError(errorActividad, 'Debe seleccionar una actividad!')
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    // validacion de nivel de estudio

    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio, 'Debe seleccionar un nivel de estudio!')
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio);
    }

    // validacion de terminos y condiciones

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if(!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debe aceptar los términos y condiciones!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta; // Esto dirá si el formulario completo es o no es válido!
}


const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}

