const sidenavMenu = document.querySelector(".sidenav__menu");

function menuShow() {
  var menu = document.querySelectorAll(".sidenav--hamburguer");
  var liAnimate = document.querySelectorAll("li.animate__animated")

  menu.forEach((item) => {
    item.classList.toggle("sidenav__menu--enabled");
  });

  liAnimate.forEach((item) => {
    item.classList.toggle("animate__slideInLeft");
  });
}

sidenavMenu.addEventListener('click', menuShow);
