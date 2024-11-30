// Ejecutando funciones
document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Declarando variables
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var contenedor_login_register = document.querySelector(".contenedor_login_register");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_register = document.querySelector(".caja_trasera_register");

// Funciones
function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
        contenedor_login_register.style.flexDirection = "row";
        formulario_login.classList.add("active");
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "block";
        formulario_login.classList.remove("active");
        formulario_register.classList.remove("active");
    }
}

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.classList.add("active");
        formulario_register.classList.remove("active");
        contenedor_login_register.style.left = "10px";
    } else {
        formulario_login.classList.add("active");
        formulario_register.classList.remove("active");
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.classList.add("active");
        formulario_login.classList.remove("active");
        contenedor_login_register.style.left = "410px";
    } else {
        formulario_register.classList.add("active");
        formulario_login.classList.remove("active");
    }
}

// Ejecutar al cargar la página
anchoPage();
