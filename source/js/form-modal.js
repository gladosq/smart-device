(function () {
  const formButton = document.querySelector('.modal__button');
  const inputName = document.querySelector('.modal__name');
  const inputPhone = document.querySelector('.modal__phone');
  const inputText = document.querySelector('.modal__question');
  const inputCheckbox = document.querySelector('.modal__checkbox');

  let maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  let mask = IMask(inputPhone, maskOptions);

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
