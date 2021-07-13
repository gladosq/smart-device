const footerNav = document.querySelector('.footer__nav');
const footerAdress = document.querySelector('.footer__adress');

function noJsCompatibility() {
  if (footerNav.classList.contains('footer__nav--active')) {
    footerNav.classList.remove('footer__nav--active');
  }

  if (footerAdress.classList.contains('footer__adress--active')) {
    footerAdress.classList.remove('footer__adress--active');
  }
}

noJsCompatibility();
