let starButton = document.querySelectorAll('.star-button');
let icon = document.querySelectorAll('.icon');
const MODAL = document.querySelector('.star-modal');

function openModal() {
  MODAL.classList.add('open-modal');
  setTimeout(() => {
    MODAL.classList.remove('open-modal');
  }, 4000);
}

for (let i = 0; i < starButton.length; i++) {
  starButton[i].addEventListener('click', openModal);
}

for (let i = 0; i < starButton.length; i++) {
  starButton[i].addEventListener('click', function() {
    starButton[i].src = './images/star-icon-clicked.svg'
  });
}