window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar-wrapper");
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".hamburger-menu");
  const wrapper = document.querySelector("body");
  const links = document.querySelector(".menu").children;
  const overlay = document.querySelector(".overlay");

  let scrollPos = 0;
  let screenWidth = window.innerWidth;
  // adding scroll event
  window.addEventListener("scroll", function () {
    // detects new state and compares it with the new one
    if (document.body.getBoundingClientRect().top > scrollPos) {
      if (screenWidth <= 450) {
        navbar.style.boxShadow = "none";
      } else {
        navbar.style.boxShadow = "1px 1px 10px 1px rgb(175, 175, 175)";
      }
      navbar.style.top = "0%";
    } else {
      navbar.style.top = "-50%";
      navbar.style.height = "80px";
    }
    let scrolled = window.scrollY;

    if (scrolled == 0) {
      if (screenWidth <= 450) {
        navbar.style.height = "80px";
      } else {
        navbar.style.height = "120px";
        navbar.style.boxShadow = "none";
      }
    }

    // saves the new position for iteration.
    scrollPos = document.body.getBoundingClientRect().top;
  });

  // adding hamburger menu click event
  hamburger.addEventListener("click", () => {
    console.log(links);
    hamburger.classList.toggle("open");
    wrapper.classList.toggle("open");
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
    navbar.classList.toggle("open-menu");
  });

  for (let i = 0; links.length; i++) {
    links[i].addEventListener("click", () => {
      menu.classList.remove("open");
      wrapper.classList.remove("open");
      hamburger.classList.remove("open");
      navbar.style.top = "-50%";
      navbar.style.height = "80px";
    });
  }
});
