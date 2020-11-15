"use strict";


document.addEventListener("DOMContentLoaded", function(event) {
    "use strict";

    //Inserta el captcha generado
    let captchaGenerado = generarCaptcha();
    let captchaAleatorio = document.querySelector('#captchaAqui');
    captchaAleatorio.innerHTML = captchaGenerado;

    //boton de Enviar formulario. Desactivado por defecto.
    let botonForm = document.querySelector('.btnEnviarFormulario');
    botonForm.disabled = true;
    botonForm.addEventListener('click', envForm);

    //Input captcha para deshabilitarlo cuando se ingresa correctamente
    let inputCaptcha = document.querySelector('#captcha');

    //Funcion de salto para insertar el argumento 
    function envForm() {
        enviarFormulario();
    };

    //Enviar formulario con mensaje de exito. Deshabilita el boton enviar formulario.
    function enviarFormulario() {
        "use strict";
        event.preventDefault();
        let formEnviado = document.querySelector('#infoStatus');
        formEnviado.innerHTML = "Formulario Enviado correctamente!";
        botonForm.disabled = true;
    };

    //Comprueba el captcha y habilita el boton form 
    let botonRobot = document.querySelector('.btnNoRobot');
    botonRobot.addEventListener('click', compCaptcha);


    //Funcion de salto para poder pasar argumentos desde la primera funcion.
    function compCaptcha() {
        ComprobarCaptcha(captchaGenerado, botonForm);
    };

    //Comprueba el captcha y habilita el boton en caso de ser correcto
    function ComprobarCaptcha(captchaGenerado) {
        "use strict";
        event.preventDefault();
        let inputUsuario = document.querySelector('#captcha').value;
        let resultadoDeComparacion = validarCaptcha(inputUsuario, captchaGenerado);
        informarValidacion(resultadoDeComparacion);
    };


    //Genera un captcha aleatorio de 6 digitos
    function generarCaptcha() {
        "use strict";
        // captcha de 6 digitos enteros
        let captcha = (Math.floor(100000 + Math.random() * 900000));
        return captcha;
    };

    //Valida el captcha con el valor ingresado por el usuario
    function validarCaptcha(valorUsuario, captchaGen) {
        "use strict";
        if (valorUsuario == captchaGen) {
            return true;
        } else {
            return false;
        }
    };

    //Inserta el resultado en el html
    function informarValidacion(resultado) {
        "use strict";
        if (resultado == true) {
            document.querySelector('#infoStatus').innerHTML = "Captcha correcto!"
            botonRobot.disabled = true;
            inputCaptcha.disabled = true;
            botonForm.disabled = false;
        } else {
            document.querySelector('#infoStatus').innerHTML = "El captcha no coincide. Intente nuevamente"
        }
    };


    // Newsletter
    let newsletter = document.querySelector('#btnSuscripcion');
    newsletter.addEventListener('click', suscribirme);

    function suscribirme() {
        "use strict";
        event.preventDefault();
        let inputSuscripcion = document.querySelector('#emailNewsletter');
        document.querySelector('#msjNewsletter').innerHTML = "La suscripción se realizo correctamente!"
        newsletter.disabled = true;
        inputSuscripcion.disabled = true;
    };

});