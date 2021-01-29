const sidenavMenu = document.querySelector(".sidenav__menu");

function menuShow() {
  var menu = document.querySelectorAll(".sidenav--hamburguer");
  var liAnimate = document.querySelectorAll("li.animate__animated");

  menu.forEach((item) => {
    item.classList.toggle("sidenav__menu--enabled");
  });

  liAnimate.forEach((item) => {
    item.classList.toggle("animate__slideInLeft");
  });
}

sidenavMenu.addEventListener("click", menuShow);

const sidenavNoturno = document.querySelector(".sidenav__noturno");

function darkMode() {
  var html = document.querySelector("html");
  var introducaoDark = document.querySelector(".introducao__sampa--dark");
  var introducaoWhite = document.querySelector(".introducao__sampa--white");

  html.classList.toggle("dark__mode");

  introducaoDark.classList.replace("introducao__sampa--dark", "introducao__sampa--white");
  introducaoWhite.classList.replace("introducao__sampa--white", "introducao__sampa--dark");

  sidenavNoturno.classList.toggle("fa-sun");
}

sidenavNoturno.addEventListener("click", darkMode);
