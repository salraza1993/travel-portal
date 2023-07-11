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
    autoplay: true,
    arrows: true,
    prevArrow: $('.slider-arrows__button--left'),
    nextArrow: $('.slider-arrows__button--right'),
  });

  $('.top-deals-cards-slider').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    dots: true,
    prevArrow: '<span class="slick-arrow--left"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="slick-arrow--right"><i class="fa-solid fa-arrow-right"></i></span>',
  });

  $('.partners-logos-slider').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    dots: true,
    prevArrow: '<span class="slick-arrow--left"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="slick-arrow--right"><i class="fa-solid fa-arrow-right"></i></span>',
  });
});

// ============ [ Dropdowns Begins ] ============ //
const dropdownBlockButton = document.querySelectorAll('.dropdown-block__button');
function closeAllDropdownBlocks() {
  const dropdownBlocks = document.querySelectorAll('.dropdown-block');
  dropdownBlocks.forEach(item => {
    item.querySelectorAll('.dropdown-block__data').forEach(subItem => subItem.classList.remove('opened'));
    item.classList.remove('active');
  });
}
function openThisDropdownBlock(event) {
  let this_item = event.target;
  let this_parent = event.target.closest('.dropdown-block');
  let dropdownListContainer = this_parent.querySelector('.dropdown-block__data');
  if (dropdownListContainer.classList.contains('opened')) {
    dropdownListContainer.classList.remove('opened');
    this_parent.classList.remove('active');
  } else {
    dropdownListContainer.classList.add('opened');
    this_parent.classList.add('active');
  }
  dropdownListContainer.addEventListener('click', function () {
    dropdownListContainer.classList.remove('opened');
    this_parent.classList.remove('active');
  });
}
dropdownBlockButton.forEach(button => {
  button.addEventListener('click', function (elem) {
    let this_item_parent = elem.target.closest('.dropdown-block');
    if (!this_item_parent.classList.contains('active')) elem.stopPropagation();
    closeAllDropdownBlocks();
    openThisDropdownBlock(elem);
  });
});
// disabling all dropdowns
document.addEventListener('click', () => closeAllDropdownBlocks(), false);
// ============ [ Dropdowns End ] ============ //

// Accordion
const accordionContainer = document?.querySelector('.accordion-container');
const accordionBlocks = accordionContainer?.querySelectorAll('.accrodion-block');
const accordionHeaders = accordionContainer?.querySelectorAll('.accrodion-block__header');
const elem_checkbox = document?.querySelector('.checkbox');
accordionBlocks?.forEach(item => {
  item.addEventListener('click', (event) => {
    let thisItemParent = event.target.parentNode;
    if (thisItemParent.classList.contains('is-opened')) {
      thisItemParent.classList.remove('is-opened');
      accordionBlocks.forEach(block => block.classList.remove('is-opened'));
      return;
    }
    accordionBlocks.forEach(block => block.classList.remove('is-opened'));
    thisItemParent.classList.add('is-opened');
  });
})

const packageDetailsTabContainer = document?.querySelector('#package-details-tab');
const packageTabs = packageDetailsTabContainer?.querySelectorAll('.tab-list .tab-list__item');
const packageTabData = packageDetailsTabContainer?.querySelectorAll('.tab-data');

packageTabs?.forEach(tab => {
  tab?.addEventListener('click', e => {
    e.preventDefault();
    packageTabs?.forEach(tabItem => tabItem.classList.remove('active'));
    packageTabData?.forEach(tabItem => tabItem.classList.remove('selected'));
    let this_item_id = e.target.id
    let tab_data = packageDetailsTabContainer?.querySelector(`#${this_item_id}-data`);
    e.target?.classList.add('active');
    tab_data?.classList.add('selected');
  });
})

document?.addEventListener('DOMContentLoaded', function () {
  try {
    const departure = new Litepicker({
      element: document.getElementById('departure'),
      numberOfColumns: 2,
      numberOfMonths: 2,
      plugins: ['mobilefriendly']
    });
  } catch (error) {
    console.error(error)
  }
  try {
    const packageDeparture = new Litepicker({
      element: document.getElementById('packageDeparture'),
      numberOfColumns: 2,
      numberOfMonths: 2,
      plugins: ['mobilefriendly']
    });
  } catch (error) {
    console.error(error)
  }
});
