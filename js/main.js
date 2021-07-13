"use strict";

var footerNav = document.querySelector('.footer__nav');
var footerNavCaption = document.querySelector('.footer__nav h3');
var footerAdress = document.querySelector('.footer__adress');
var footerAdressCaption = document.querySelector('.footer__adress h3');
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
"use strict";

var formButton = document.querySelector('.modal__button');
var inputName = document.querySelector('.modal__name');
var inputPhone = document.querySelector('.modal__phone');
var inputText = document.querySelector('.modal__question');
var inputCheckbox = document.querySelector('.modal__checkbox');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(inputPhone, maskOptions);
formButton.addEventListener('click', function () {
  if (inputPhone.value.length < 16) {
    inputPhone.setCustomValidity('Введите 10 чисел');
  } else {
    inputPhone.setCustomValidity('');
  }

  inputPhone.reportValidity();
  checkValidityCheckbox();
  localStorage.setItem('name', inputName.value);
  localStorage.setItem('phone', inputPhone.value);
  localStorage.setItem('question', inputText.value);
});
inputCheckbox.addEventListener('change', function () {
  checkValidityCheckbox();
});

function checkValidityCheckbox() {
  if (!inputCheckbox.checked) {
    formButton.disabled = true;
    inputCheckbox.classList.add('modal__checkbox--invalid');
  } else {
    if (inputCheckbox.classList.contains('modal__checkbox--invalid')) {
      inputCheckbox.classList.remove('modal__checkbox--invalid');
      formButton.disabled = false;
    }
  }
}
"use strict";

var headerNavButton = document.querySelector('.header__nav-button');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var modalCloseButton = document.querySelector('.modal__close-button');
var modalInputName = document.querySelector('.modal__name');
headerNavButton.addEventListener('click', function () {
  showModal();
  window.addEventListener('keydown', hideModalHandler);
  modalCloseButton.addEventListener('click', hideModalHandler);
  overlay.addEventListener('click', hideModalHandler);
});

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalInputName.focus();
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function hideModalHandler(evt) {
  if (evt.type === 'keydown' && evt.key !== 'Escape') {
    return;
  }

  hideModal();
  window.removeEventListener('keydown', hideModalHandler);
  modalCloseButton.removeEventListener('click', hideModalHandler);
  overlay.addEventListener('click', hideModalHandler);
}
"use strict";

var footerNav = document.querySelector('.footer__nav');
var footerAdress = document.querySelector('.footer__adress');

function noJsCompatibility() {
  if (footerNav.classList.contains('footer__nav--active')) {
    footerNav.classList.remove('footer__nav--active');
  }

  if (footerAdress.classList.contains('footer__adress--active')) {
    footerAdress.classList.remove('footer__adress--active');
  }
}

noJsCompatibility();