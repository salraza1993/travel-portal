const mainBody = document.querySelector('body');
const tabHamburgerMenu = document.querySelector('.tab-hamburger-menu');
const navigationMenu = document.querySelector('.main-header__navigation__menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenuButton = document.querySelector('.mobile-menu__close');

let window_width = window.innerWidth;

// ============ [ Show dropdown menu in tablet view ] ============ //
const tabMenuHandler = event => {
  event.preventDefault();
  event.target.classList.toggle('active');  
  navigationMenu.classList.toggle('opened');
}

// ============ [ Show dropdown menu in mobile view ] ============ //
const mobileMenuHandler = event => {
  event.preventDefault();
  event.target.classList.add('active');
  mobileMenu.classList.add('opened');
  mainBody.classList.add('no-scroll');
}
const closeMobileMenuHandler = event => {
  event.preventDefault();
  tabHamburgerMenu.classList.remove('active');
  mobileMenu.classList.remove('opened');
  mainBody.classList.remove('no-scroll');
}

if (window_width >= 768 && window_width <= 992) {
  tabHamburgerMenu.addEventListener('click', event => tabMenuHandler(event))
  tabHamburgerMenu.addEventListener('resize', event => tabMenuHandler(event))
}
if (window_width <= 767) { 
  tabHamburgerMenu.addEventListener('click', event => mobileMenuHandler(event))
  closeMobileMenuButton.addEventListener('click', event => closeMobileMenuHandler(event))
  tabHamburgerMenu.addEventListener('resize', event => mobileMenuHandler(event))
  closeMobileMenuButton.addEventListener('resize', event => closeMobileMenuHandler(event))
}

// ============= [ Home Slider ] ============= //
const homeSliderArrow_left = document.querySelector('.slider-arrows__button--left');
const homeSliderArrow_right = document.querySelector('.slider-arrows__button--right');
$(document).ready(function () {
  $('.home-slider').slick({
    infinite: true,
    // speed: 3000,
    // fade: true,
    // cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    autoplay: false,
    arrows: true,
    prevArrow: $('.slider-arrows__button--left'),
    nextArrow: $('.slider-arrows__button--right'),
  });
});

const options = {
  type: 'multiple',
};

document.addEventListener('DOMContentLoaded', () => {
  const calendar = new VanillaCalendar('#calendar', options);
  calendar.init();  
});