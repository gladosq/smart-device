const footerNav = document.querySelector('.footer__nav');
const footerNavCaption = document.querySelector('.footer__nav h3');
const footerAdress = document.querySelector('.footer__adress');
const footerAdressCaption = document.querySelector('.footer__adress h3');

footerNavCaption.addEventListener('click', function () {
  if (footerNav.classList.contains('footer__nav--active')) {
    footerNav.classList.remove('footer__nav--active');
  } else {
    footerNav.classList.add('footer__nav--active');
    if (footerAdress.classList.contains('footer__adress--active')) {
      footerAdress.classList.remove('footer__adress--active');
    }
  }
});

footerAdressCaption.addEventListener('click', function () {
  if (footerAdress.classList.contains('footer__adress--active')) {
    footerAdress.classList.remove('footer__adress--active');
  } else {
    footerAdress.classList.add('footer__adress--active');
    if (footerNav.classList.contains('footer__nav--active')) {
      footerNav.classList.remove('footer__nav--active');
    }
  }
});
