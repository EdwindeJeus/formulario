const formulario = document.querySelector('.form-ficha');
//variables de campo document.querySelector(".forma-ficha")

const txt_nombre = document.querySelector('#nombre');

const txt_curp = document.querySelector('#curp');

const txt_correo = document.querySelector('#correo');

const txt_promedio = document.querySelector('#promedio');

const txt_telefono = document.querySelector('#telefono');

const slc_escuela = document.querySelector('#escuelas');

const sic_carreras = document.querySelector('#carreras');

//Asigacion de evento al formulario, generacion de la funcion validad form formulario.addEventListener('submit', function validarform(event) {

formulario.addEventListener('submit', function validarform(event){


event.preventDefault();

if (txt_nombre.value === '' || txt_promedio.value==='' || txt_curp.value===''|| txt_correo.value ===''|| txt_telefono.value ===''|| slc_escuela.value ===''|| sic_carreras.value==='') { 
    notificar ('Existen campos vacios', 'msg-error');

} else { 
    notificar('Datos Enviados Correctamente', 'msg-ok');
}

    

function notificar(cadena, tipo){

const mensaje = document.createElement('P');

mensaje.textContent = cadena;

mensaje.classList.add(tipo);

formulario.appendChild(mensaje);

setTimeout(() => {

mensaje.remove();
}, 2000);
}
})