// Navigation toggle action //
const togglerElement = document.querySelector('.navigation__toggler');
const sliderElement = document.querySelector('#aside');
const mainElement = document.querySelector('main');

togglerElement.addEventListener('click', () => {
  sliderElement.classList.toggle('open-slider');
});

mainElement.addEventListener('click', () => {
  sliderElement.classList.remove('open-slider');
});

// Slider active //
const activeSliderElement = document.querySelector('#aside ul .active');
const arrowRightElement = document.createElement('img');
arrowRightElement.setAttribute(
  'src',
  '../../assets/icons/icon-right-arrow.svg'
);

activeSliderElement.insertBefore(
  arrowRightElement,
  activeSliderElement.firstChild
);
