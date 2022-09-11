const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click', e => {
    desktopMenu.classList.toggle("inactive");
})