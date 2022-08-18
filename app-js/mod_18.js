let inputPassword = document.getElementById('password1');
let button = document.getElementById('submit');
let mensajeError = document.getElementById('mensajeError')

button.addEventListener('click', (e) => {
    //quito comportamiento por defecto del form
    e.preventDefault();
    validatePassword(inputPassword.value);
});

// funcion para validar el password
function validatePassword (password1) {
    let expReg = /^(?=\w*)(?=\w*[A-Z])(?=\w*[a-z])\S{12,20}$/g;
    
    // si la expresion es == true pinto de verde el borde del input
    if (expReg.test(password1) == true) {
        inputPassword.style.border = '2px solid green'
    }else {
        //si no pinto de rojo y muestro error
        inputPassword.style.border = '2px solid red'
        mensajeError.classList.add("visible");
    }
}


