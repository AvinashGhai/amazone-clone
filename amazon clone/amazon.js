// Carousel Slide Navigation
const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

// Function to go to the next slide
function showNextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

// Function to go to the previous slide
function showPrevSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

// Add event listeners to the prev and next arrows
nextBtns.forEach(btn => {
    btn.addEventListener('click', showNextSlide);
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', showPrevSlide);
});

// Cart Functionality
let cart = [];
const cartCount = document.querySelector('.cart-option');
const cartItemsCount = document.querySelector('#cartCount');

// Function to add items to the cart
function addToCart(productName) {
    cart.push(productName);
    updateCartCount();
    alert(`${productName} has been added to your cart.`);
}

// Update the cart count in the header
function updateCartCount() {
    cartItemsCount.textContent = cart.length;
}

// Attach event listeners to product cards
const productCards = document.querySelectorAll('.item-card');

productCards.forEach(card => {
    const addButton = card.querySelector('a');
    addButton.addEventListener('click', () => {
        const productName = card.querySelector('h2').textContent;
        addToCart(productName);
    });
});



