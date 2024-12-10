const menuButton = document.querySelector('.menu-hamburguer'); // Botão do menu
const containerNav = document.querySelector('.container-nav'); // Menu lateral
const backButton = document.querySelector('.back'); // Botão de voltar
const bgNav = document.querySelector('.bg-nav');

// Mostrar o menu ao clicar no botão hambúrguer
menuButton.addEventListener('click', () => {
  containerNav.classList.add('active'); // Exibe o menu
  bgNav.classList.add('bg-nav__active');
});

// Ocultar o menu ao clicar no botão voltar
backButton.addEventListener('click', () => {
  containerNav.classList.remove('active'); // Esconde o menu
  bgNav.classList.remove('bg-nav__active');
});
