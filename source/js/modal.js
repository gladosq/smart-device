const headerNavButton = document.querySelector('.header__nav-button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalInputName = document.querySelector('.modal__name');

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
