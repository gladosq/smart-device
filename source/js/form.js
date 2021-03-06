(function () {
  const formButton = document.querySelector('.feedback__button');
  const inputName = document.querySelector('.feedback__name');
  const inputPhone = document.querySelector('.feedback__phone');
  const inputText = document.querySelector('.feedback__question');
  const inputCheckbox = document.querySelector('.feedback__checkbox');

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
      inputCheckbox.classList.add('feedback__checkbox--invalid');
    } else {
      if (inputCheckbox.classList.contains('feedback__checkbox--invalid')) {
        inputCheckbox.classList.remove('feedback__checkbox--invalid');
        formButton.disabled = false;
      }
    }
  }
})();
