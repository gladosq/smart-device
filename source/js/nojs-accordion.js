(function () {
  const footerNav = document.querySelector('.footer__nav');
  const footerAddress = document.querySelector('.footer__address');

  function noJsCompatibility() {
    if (footerNav.classList.contains('footer__nav--active')) {
      footerNav.classList.remove('footer__nav--active');
    }

    if (footerAddress.classList.contains('footer__address--active')) {
      footerAddress.classList.remove('footer__address--active');
    }
  }

  noJsCompatibility();
})();
