(function () {
  const footerNav = document.querySelector('.footer__nav');
  const footerNavCaption = document.querySelector('.footer__nav h3');
  const footerAddress = document.querySelector('.footer__address');
  const footerAddressCaption = document.querySelector('.footer__address h3');

  footerNavCaption.addEventListener('click', function () {
    if (footerNav.classList.contains('footer__nav--active')) {
      footerNav.classList.remove('footer__nav--active');
    } else {
      footerNav.classList.add('footer__nav--active');
      if (footerAddress.classList.contains('footer__address--active')) {
        footerAddress.classList.remove('footer__address--active');
      }
    }
  });

  footerAddressCaption.addEventListener('click', function () {
    if (footerAddress.classList.contains('footer__address--active')) {
      footerAddress.classList.remove('footer__address--active');
    } else {
      footerAddress.classList.add('footer__address--active');
      if (footerNav.classList.contains('footer__nav--active')) {
        footerNav.classList.remove('footer__nav--active');
      }
    }
  });
})();
