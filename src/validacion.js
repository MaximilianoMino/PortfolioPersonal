const enviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const nombre = document.querySelector('#nombre');
const motivo = document.querySelector("#motivo");
const comentario = document.querySelector("#comentario");
const formulario = document.querySelector("#form");


const eventListeners = () => {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    motivo.addEventListener("blur", validarFormulario);
    nombre.addEventListener("blur", validarFormulario);
    comentario.addEventListener("blur", validarFormulario);

    //ENVIAR MAIL

    formulario.addEventListener('submit',
        enviarEmail);

}

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Funciones

const iniciarApp = () => {

    if (
        er.test(email.value) === "" ||
        nombre.value === "" ||
        motivo.value === "" ||
        comentario.value === ""
    ) {
        enviar.disabled = true;
        enviar.classList.add('disabled');
    }
}




const validarFormulario = (e) => {

    if (e.target.value.length > 0) {


        //ELIMINANDO ERRORES...

        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        e.target.classList.remove("border", "border-danger");
        e.target.classList.add("border", "border-success");
    } else {

        e.target.classList.remove("border", "border-success");

        e.target.classList.add("border", "border-danger");
        mostrarError('Todos los campos son obligatorios');
    }


    if (e.target.type === 'email') {


        if (er.test(e.target.value)) {
            const error = document.querySelector("p.error");
            if (error) {
                error.remove();
            }

            e.target.classList.remove("border", "border-danger");
            e.target.classList.add("border", "border-success");
        } else {
            e.target.classList.remove("border", "border-success");

            e.target.classList.add("border", "border-danger");

            mostrarError('Email no valido');
        }
    }

    if (
        er.test(email.value) !== "" &&
        nombre.value !== "" &&
        motivo.value !== "" &&
        comentario.value !== ""
    ) {
        enviar.disabled = false;
        enviar.classList.remove("disabled");
    } else {
        er.test(email.value) === "" ||
            nombre.value === "" ||
            motivo.value === "" ||
            comentario.value === ""

        enviar.disabled = true;
        enviar.classList.add('disabled');
    }


}





//Mostrar error debajo

const mostrarError = (mensaje) => {

    const mensajeError = document.createElement('p');

    mensajeError.textContent = mensaje;

    mensajeError.classList.add('alert-danger', 'text-danger', 'mt-3', 'p-2', 'error', 'text-center');

    const errores = document.querySelectorAll('.error');

    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

}


//Envia el email


eventListeners();