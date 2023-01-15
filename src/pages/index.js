// Navigation toggle action //
const togglerElement = document.querySelector('.navigation__toggler');
const sliderElement = document.querySelector('#aside');
const mainElement = document.querySelector('#main__container');

togglerElement.addEventListener('click', () => {
  sliderElement.classList.toggle('open-slider');
});

mainElement.addEventListener('click', () => {
  sliderElement.classList.remove('open-slider');
});

// Slider active //
// const sliderElement = document.querySelectorAll('.aside__link');
const arrowRightElement = document.createElement('img');
arrowRightElement.setAttribute(
  'src',
  '../../assets/icons/icon-right-arrow.svg'
);

const dropdownElement = document.querySelector('.dropdown__link');

const dropdownMenu = document.querySelector('.dropdown__menu');

window.addEventListener('load', (e) => {
  // get width of the window
  const width = window.innerWidth;
  // if width is less than 992px
  if (width < 992) {
    dropdownElement.addEventListener('click', () => {
      dropdownMenu.classList.toggle('dropdown__open');
    });
  }
});

// sliderElement.forEach((element) => {
//   // event on mouse hover
//   element.addEventListener('mouseover', () => {
//     element.before(arrowRightElement);
//   });

//   // event on mouse leave
//   element.addEventListener('mouseleave', () => {
//     element.removeChild(arrowRightElement);
//   });
// });

// activeSliderElement;

// activeSliderElement.insertBefore(
//   arrowRightElement,
//   activeSliderElement.firstChild
// );
