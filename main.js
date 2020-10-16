"use strict";

const navbar = document.querySelector("#navbar");
const home = document.querySelector("#home");
console.assert(navbar);
const navbarHeight = navbar.getBoundingClientRect().height;
const homeHeight = home.getBoundingClientRect().height;

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= navbarHeight) {
    navbar.classList.add("navbar--dark");
    // navbar.setAttribute("id", "navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
    // navbar.removeAttribute("id");
  }

  if (window.scrollY <= homeHeight / 2) {
    document.querySelector("#home").style.opacity = 1 - window.scrollY / homeHeight;

    document.querySelector(".arrow-up").classList.remove("visible");
  } else {
    // arrow-up.
    document.querySelector(".arrow-up").classList.add("visible");
  }
});

// scroll to
document.querySelector(".navbar__menu").addEventListener("click", (event) => {
  const selector = event.target.dataset.link;
  if (!selector) return;
  document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
});

// home__contact button
document.querySelector(".home__contact").addEventListener("click", (event) => {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
});

// arrow-up
document.querySelector(".arrow-up").addEventListener("click", (event) => {
  document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
});

// projector filter
document.querySelector(".work__categories").addEventListener("click", (event) => {
  const button = event.target.dataset.filter ? event.target : event.target.parentNode;
  const type = button.dataset.filter;
  if (!type) return;

  console.log("type1:", type);

  // update selected button
  const selected = document.querySelector(".category__btn.selected");
  if (selected === button) return;
  selected.classList.remove("selected");
  button.classList.add("selected");

  const projects = document.querySelector(".work__projects");
  projects.classList.add("anim-out");

  setTimeout(() => {
    const items = document.querySelectorAll(".project");
    for (const item of items) {
      console.log(type, item.dataset.type);
      if (type === "*" || item.dataset.type === type) item.classList.remove("invisible");
      else item.classList.add("invisible");
    }
    projects.classList.remove("anim-out");
  }, 400);
});

document.querySelector(".navbar__toggle-btn").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".navbar__menu").classList.toggle("open");
});
