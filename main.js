const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// Media query
const hamburgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click', e => {
    desktopMenu.classList.toggle("inactive");
})

hamburgerMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle("inactive")
})