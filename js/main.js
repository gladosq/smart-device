"use strict";

(function () {
  var footerNav = document.querySelector('.footer__nav');
  var footerNavCaption = document.querySelector('.footer__nav h3');
  var footerAddress = document.querySelector('.footer__address');
  var footerAddressCaption = document.querySelector('.footer__address h3');
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
"use strict";

(function () {
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
})();
"use strict";

(function () {
  var formButton = document.querySelector('.feedback__button');
  var inputName = document.querySelector('.feedback__name');
  var inputPhone = document.querySelector('.feedback__phone');
  var inputText = document.querySelector('.feedback__question');
  var inputCheckbox = document.querySelector('.feedback__checkbox');
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
      inputCheckbox.classList.add('feedback__checkbox--invalid');
    } else {
      if (inputCheckbox.classList.contains('feedback__checkbox--invalid')) {
        inputCheckbox.classList.remove('feedback__checkbox--invalid');
        formButton.disabled = false;
      }
    }
  }
})();
"use strict";

(function () {
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
})();
"use strict";

(function () {
  var footerNav = document.querySelector('.footer__nav');
  var footerAddress = document.querySelector('.footer__address');

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