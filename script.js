function cerrarModal() {
    let navbar = document.querySelector(".header__navegacion");
    let closeIcon = document.querySelector(".menu__boton--cerrado");
    let openIcon = document.querySelector(".menu__boton--abierto");
    navbar.classList.remove("visible");
    closeIcon.classList.add("escondido");
    openIcon.classList.remove("escondido");
}

function abrirModal() {
    let navbar = document.querySelector(".header__navegacion");
    let closeIcon = document.querySelector(".menu__boton--cerrado");
    let openIcon = document.querySelector(".menu__boton--abierto");
    navbar.classList.add("visible");
    navbar.classList.add("texto--centrado")
    closeIcon.classList.remove("escondido");
    openIcon.classList.add("escondido");
}