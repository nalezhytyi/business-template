//SHOW MENU

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu');
  const menuItem = document.querySelectorAll('.menu li');

  //toggle nav
  const showMenu = () => {
    nav.classList.toggle('show');

    /* animate links */
    menuItem.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    /* burger animation */
    burger.classList.toggle('toggle');
  };

  burger.addEventListener('click', showMenu);
};

navSlide();

//ACTIVE LINK
const menuLink = document.querySelectorAll('.menu__link');

function linkAction() {
  /*Active link*/
  menuLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');
}

menuLink.forEach((n) => n.addEventListener('click', linkAction));

//SMOOTH SCROLL AFTER CLICK ON ANCHOR LINK
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

//slider
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
  }).mount();
});
