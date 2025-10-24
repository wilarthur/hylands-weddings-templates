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
  threshold: 0.1,
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

/* Gallery lightbox */

$(document).ready(function () {
  $(".gallery-images").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: "a", // the selector for gallery item
      type: "image",
      // gallery: {
      //   enabled: true,
      //   navigateByImgClick: true,
      //   arrowMarkup:
      //     '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      //   tPrev: "Previous (Left arrow key)", // title for left button
      //   tNext: "Next (Right arrow key)", // title for right button
      //   tCounter: '<span class="mfp-counter">%curr% of %total%</span>', // markup of counter
      //   titleSrc: "title",
      // },
    });
  });
});

/* Gallery filter */
const galleryFilter = document.getElementById("gallery-filter");

function galleryFilterCheck() {
  let galleryFilterValue =
    galleryFilter.options[galleryFilter.selectedIndex].value;
  console.log(galleryFilterValue);

  if (galleryFilterValue === "all") {
    document
      .querySelectorAll(".spring")
      .forEach((a) => (a.style.display = "grid"));
    document
      .querySelectorAll(".summer")
      .forEach((a) => (a.style.display = "grid"));
    document
      .querySelectorAll(".autumn")
      .forEach((a) => (a.style.display = "grid"));
    document
      .querySelectorAll(".winter")
      .forEach((a) => (a.style.display = "grid"));
  }

  if (galleryFilterValue === "spring") {
    document
      .querySelectorAll(".spring")
      .forEach((a) => (a.style.display = "grid"));
    document
      .querySelectorAll(".summer")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".autumn")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".winter")
      .forEach((a) => (a.style.display = "none"));
  }

  if (galleryFilterValue === "summer") {
    document
      .querySelectorAll(".spring")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".summer")
      .forEach((a) => (a.style.display = "grid"));
    document
      .querySelectorAll(".autumn")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".winter")
      .forEach((a) => (a.style.display = "none"));
  }

  if (galleryFilterValue === "autumn") {
    document
      .querySelectorAll(".spring")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".summer")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".autumn")
      .forEach((a) => (a.style.display = "grid"));
    document
      .querySelectorAll(".winter")
      .forEach((a) => (a.style.display = "none"));
  }

  if (galleryFilterValue === "winter") {
    document
      .querySelectorAll(".spring")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".summer")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".autumn")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".winter")
      .forEach((a) => (a.style.display = "grid"));
  }
}

/* Accordions */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
