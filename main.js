const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const navShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
// Media query
const hamburgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click', e => {
    desktopMenu.classList.toggle("inactive");

    if(!desktopMenu.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
})

hamburgerMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle("inactive")

    if(!mobileMenu.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }
})

navShoppingCart.addEventListener('click', e => {
    productDetail.classList.toggle("inactive");

    if (!productDetail.classList.contains("inactive")) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
})