const menuButton = document.querySelector('.menu-hamburguer'); 
const containerNav = document.querySelector('.container-nav'); 
const backButton = document.querySelector('.back'); 
const bgNav = document.querySelector('.bg-nav');

menuButton.addEventListener('click', () => {
  containerNav.classList.add('active');
  bgNav.classList.add('bg-nav__active');
});


backButton.addEventListener('click', () => {
  containerNav.classList.remove('active');
  bgNav.classList.remove('bg-nav__active');
});

function validateResult() {

  const correctResult = 427 + 628;


  const userResult = parseInt(document.getElementById('userResult').value, 10);

  const feedback = document.getElementById('feedback');

  const feedbackMobile = document.getElementById('feedback-mobile');

  if (userResult === correctResult) {
    feedback.textContent = 'Resposta correta!';
    feedback.style.color = 'green'; 
  } else {
    feedback.textContent = 'Resposta incorreta. Tente novamente!';
    feedback.style.color = 'red';
  }

  if (userResult === correctResult) {
    feedbackMobile.textContent = 'Resposta correta!';
    feedbackMobile.style.color = 'green'; 
  } else {
    feedbackMobile.textContent = 'Resposta incorreta. Tente novamente!';
    feedbackMobile.style.color = 'red'; 
  }
}
