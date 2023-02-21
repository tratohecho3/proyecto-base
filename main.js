function closeModal(){
    let menu = document.querySelector(".nav__menu")
    let closeIcon = document.querySelector(".nav__icon--close");
    let openIcon = document.querySelector(".nav__icon--open");

    menu.classList.remove("visible");
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");

}

function openModal(){
    let menu = document.querySelector(".nav__menu")
    let closeIcon = document.querySelector(".nav__icon--close");
    let openIcon = document.querySelector(".nav__icon--open");

    menu.classList.add("visible");
    closeIcon.classList.remove("hidden");
    openIcon.classList.add("hidden");
}