const slides = [{ city: 'Rostov-on-Don <br>LCD admiral', 
                  area: '81 m2',
                  repairTime: '3.5 months',
                  image: './images/image_2.1.jpg'}, 

                { city: 'Sochi <br>Thieves', 
                  area: '105 m2',
                  repairTime: '4 months',
                  image: './images/image2_2.jpg'}, 

                { city: 'Rostov-on-Don <br>Patriotic', 
                  area: '93 m2',
                  repairTime: '3 months',
                  image: './images/image2_3.jpg'}];

const slideBox = document.querySelector('.projects-content-image');

const nav = document.querySelectorAll('.projects-navigation_item');

const leftArrow = document.querySelector('.slider-arrow_left');
const rightArrow = document.querySelector('.slider-arrow_right');

const dots = document.querySelectorAll('.dots');

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const repairTime = document.querySelector('.repair-time');

let slideNumber = 0;

nav.forEach((item, index) => item.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = index;
  setSlide(slideNumber);
}));

dots.forEach((item, index) => item.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = index;
  setSlide(slideNumber);
}));

rightArrow.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = slideNumber > 1 ? 0 : slideNumber += 1;
  setSlide(slideNumber);
});

leftArrow.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = slideNumber < 1 ? 2 : slideNumber -= 1;
  setSlide(slideNumber);
});

function setSlide(number) {
  slideBox.setAttribute('src', slides[number].image);
  city.innerHTML = slides[number].city;
  area.innerHTML = slides[number].area;
  repairTime.innerHTML = slides[number].repairTime;
  makeNavItemActive(number);
  makeDotActive(number);
};

function makeDotActive(dotNumber) {
  dots[dotNumber].setAttribute('src', './images/light-dot.svg');
  dots.forEach((item, index) => {
    if (index !== dotNumber) item.setAttribute('src', './images/dark_dot.svg');
  });
};

function makeNavItemActive(number) {
  nav[number].classList.add('active');
  nav.forEach((item, index) => {
    if (index !== number) item.classList.remove('active');
  });
}
