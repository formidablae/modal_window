'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log('Button clicked');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('Modal closed');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {  // press ESC to close modal
    console.log(event.key, 'key was pressed');
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
