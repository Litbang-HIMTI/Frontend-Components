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
// const sliderElement = document.querySelectorAll('.aside__link');
const arrowRightElement = document.createElement('img');
arrowRightElement.setAttribute(
  'src',
  '../../assets/icons/icon-right-arrow.svg'
);

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
