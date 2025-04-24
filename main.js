function toggleMenu() {
  const element = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");
  element.classList.toggle("open");
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("open-menu-color");
}

const nav = document.getElementById("header");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 90 ||
    document.documentElement.scrollTop >= 90
  ) {
    nav.classList.add("white");
  } else {
    nav.classList.remove("white");
  }
};
