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

function toggleMenu() {
  const element = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");
  element.classList.toggle("open");
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("open-menu-color");

  if (element.classList.contains("open")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
}

/* jQuery sub menu toggle */

$(".has-sub-menu").click(function () {
  $(this).siblings(".sub-menu").toggleClass("open");
  $(this).children(".fa-chevron-down").toggleClass("flip");
});
