//SHOW MENU
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu');
  const menuItem = document.querySelectorAll('.menu li');

  /* Toggle Nav */
  const showMenu = () => {
    nav.classList.toggle('show');

    /* Animate Links */
    menuItem.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    /* Burger Animation */
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

//SLIDER
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
  }).mount();
});

//PRELOADER
const hellopreloader = document.getElementById('hellopreloader_preload');
function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function () {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interhellopreloader);
      hellopreloader.style.display = 'none';
    }
  }, 16);
}
window.onload = function () {
  setTimeout(function () {
    fadeOutnojquery(hellopreloader);
  }, 1000);
};
