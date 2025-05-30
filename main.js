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

/* Fade in animate on scroll */

const elementsToLoadIn = document.querySelectorAll(".fadein");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("faded-in");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

elementsToLoadIn.forEach((el) => observer.observe(el));
