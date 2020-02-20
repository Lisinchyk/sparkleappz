'use strict';
burgerMenu();
function burgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mainMenu = document.querySelector('.main-menu');
    const subMenu = document.querySelector('.submenu');
    const dropdown = document.querySelector('.dropdown');
    
    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        mainMenu.classList.toggle('active');  
        dropdown.classList.remove('active');
        subMenu.classList.remove('active');
    });

    dropdown.addEventListener('click', function () {
        subMenu.classList.toggle('active');
        dropdown.classList.toggle('active');
    });
}

$('.owl-carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    responsiveClass: true,
    nav: true,
    center: true,
    margin: 0,
    dots: true,
    responsive: {
        0: {
            items: 1,
            // dotsEach: true
        },
        370: {
            items: 3
        },
        410: {
            items: 5,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
        }
    }
})