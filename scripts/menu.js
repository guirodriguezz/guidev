function menuShow() {
  var menu = document.querySelectorAll(".menu--disabled");
  menu.forEach((item) => {
    item.classList.toggle("menu--enabled");
  });
}
