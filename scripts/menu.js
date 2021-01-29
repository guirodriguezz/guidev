/* #region Função para o menu hamburger */
const sidenavMenu = document.querySelector(".sidenav__menu");

function menuShow() {
  let menu = document.querySelectorAll(".sidenav--hamburguer");
  let liAnimate = document.querySelectorAll("li.animate__animated");
  let menuIcon = document.querySelector(".sidenav__redes");

  menu.forEach((item) => {
    item.classList.toggle("sidenav__menu--enabled");
  });

  liAnimate.forEach((item) => {
    item.classList.toggle("animate__slideInLeft");
  });

  menuIcon.classList.toggle("fa-times");
}

sidenavMenu.addEventListener("click", menuShow);
/* #endregion */

/* #region Função para o dark mode */
const sidenavNoturno = document.querySelector(".sidenav__noturno");

function darkMode() {
  let html = document.querySelector("html");
  let introducaoDark = document.querySelector(".introducao__sampa--dark");
  let introducaoWhite = document.querySelector(".introducao__sampa--white");

  html.classList.toggle("dark__mode");
  introducaoDark.classList.replace("introducao__sampa--dark", "introducao__sampa--white");
  introducaoWhite.classList.replace("introducao__sampa--white", "introducao__sampa--dark");

  sidenavNoturno.classList.toggle("fa-sun");

  if (html.className === "dark__mode") {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
}

sidenavNoturno.addEventListener("click", darkMode);
/* #endregion */

/* #region usa o tema escolhido do usuário */
const temaAtual = localStorage.getItem("tema") ? localStorage.getItem("tema") : null;

if (temaAtual === "dark") {
  darkMode();
}
/* #endregion */
