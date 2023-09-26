/**Hamburger and menu items */

const hamburger = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const menu = document.querySelector("#menu-container");
const menuItems = document.querySelectorAll(".menu");
const welcomePage = document.querySelector(".welcome-page");

/**Transform Hamburger to menu */

hamburger.addEventListener("click", (event) => {
  hamburgerItems.forEach((element) => {
    element.style.visibility = "hidden";
  });
  hamburger.style.transform = "translateX(50vw)";
  menu.style.visibility = "visible";
  menuItems.forEach((element) => {
    element.style.visibility = "visible";
  });
  menu.style.position = "relative";
  menu.style.left = "0vw";
  menu.style.justifyContent = "center";
  welcomePage.style.visibility = "hidden";
});

/**Query menu items and pages */
const aboutLink = document.querySelector(".menu1");
const projectLink = document.querySelector(".menu2");
const contactLink = document.querySelector(".menu3");
const aboutPage = document.querySelector(".about-page");
const projectPage = document.querySelector(".project-page");
const contactPage = document.querySelector(".contact-page");
const placeholder = document.querySelector(".placeholder-text");

/**Make pages */
aboutLink.addEventListener("click", (event) => {
  aboutPage.style.visibility = "visible";
  projectPage.style.visibility = "hidden";
  contactPage.style.visibility = "hidden";
  menuItems.forEach((element) => {
    element.style.visibility = "hidden";
  });
  placeholder.textContent = "About";
  hamburger.style.transform = "translateX(0vw)";
  hamburgerItems.forEach((element) => {
    element.style.visibility = "visible";
  });
});
projectLink.addEventListener("click", (event) => {
  projectPage.style.visibility = "visible";
  contactPage.style.visibility = "hidden";
  aboutPage.style.visibility = "hidden";
  menuItems.forEach((element) => {
    element.style.visibility = "hidden";
  });
  placeholder.textContent = "Projects";
  hamburger.style.transform = "translateX(0vw)";
  hamburgerItems.forEach((element) => {
    element.style.visibility = "visible";
  });
});
contactLink.addEventListener("click", (event) => {
  contactPage.style.visibility = "visible";
  projectPage.style.visibility = "hidden";
  aboutPage.style.visibility = "hidden";
  menuItems.forEach((element) => {
    element.style.visibility = "hidden";
  });
  placeholder.textContent = "Contact";
  hamburger.style.transform = "translateX(0vw)";
  hamburgerItems.forEach((element) => {
    element.style.visibility = "visible";
  });
});
