function createProductCards(productList) {
    for(product of productList) {
        const productCard = document.createElement('div');
        const img = document.createElement('img');
        const productInfo = document.createElement('div')
        const productInfoDiv = document.createElement('div');
        const productInfoFig = document.createElement('figure');
    
        productCard.classList.add('product-card');
        img.setAttribute('src', product.image);
        img.addEventListener('click', e => {
            productDetail.classList.remove('inactive');
            desktopMenu.classList.add('inactive');
            productDetailMenu.classList.add('inactive');
            mobileMenu.classList.add('inactive');
        })
        productInfo.classList.add('product-info');
        productInfoDiv.innerHTML = `<p>\$${product.price}</p>
                                    <p>${product.name}</p>`;
        productInfoFig.innerHTML = '<img src="./icons/bt_add_to_cart.svg" alt="">';
        productInfo.append(productInfoDiv, productInfoFig);
        productCard.append(img, productInfo);
        cardsContainer.appendChild(productCard)
    }
}

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const navShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetailMenu = document.querySelector(".product-detail-menu");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");
// Media query
const hamburgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click', e => {
    desktopMenu.classList.toggle("inactive");

    if(!desktopMenu.classList.contains('inactive')) {
        productDetailMenu.classList.add('inactive');
    }
})

hamburgerMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle("inactive")

    if(!mobileMenu.classList.contains('inactive')){
        productDetailMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
})

navShoppingCart.addEventListener('click', e => {
    productDetailMenu.classList.toggle("inactive");

    if (!productDetailMenu.classList.contains("inactive")) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
})

productDetailClose.addEventListener('click', e => {
    productDetail.classList.add('inactive');
})

// Products

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "TV",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "PC",
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

createProductCards(productList);

document.get