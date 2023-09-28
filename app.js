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
/**About page */
aboutLink.addEventListener("click", (event) => {
  aboutPage.style.visibility = "visible";
  projectPage.style.visibility = "hidden";
  contactPage.style.visibility = "hidden";
  menuItems.forEach((element) => {
    element.style.visibility = "hidden";
  });
  placeholder.textContent = "About";
  placeholder.style.animation = "pageHeader 0.3s forwards";
  hamburger.style.transform = "translateX(0vw)";
  hamburgerItems.forEach((element) => {
    element.style.visibility = "visible";
  });
});

/**Project page */
projectLink.addEventListener("click", (event) => {
  projectPage.style.visibility = "visible";
  contactPage.style.visibility = "hidden";
  aboutPage.style.visibility = "hidden";
  menuItems.forEach((element) => {
    element.style.visibility = "hidden";
  });
  placeholder.textContent = "Projects";
  placeholder.style.animation = "pageHeader 0.3s forwards";
  hamburger.style.transform = "translateX(0vw)";
  hamburgerItems.forEach((element) => {
    element.style.visibility = "visible";
  });
});

/**Contact page */
contactLink.addEventListener("click", (event) => {
  contactPage.style.visibility = "visible";
  projectPage.style.visibility = "hidden";
  aboutPage.style.visibility = "hidden";
  menuItems.forEach((element) => {
    element.style.visibility = "hidden";
  });
  placeholder.textContent = "Contact";
  placeholder.style.animation = "pageHeader 0.3s forwards";
  hamburger.style.transform = "translateX(0vw)";
  hamburgerItems.forEach((element) => {
    element.style.visibility = "visible";
  });
});

/**Logo anim */
const logo = document.querySelector("#logo");

logo.addEventListener("mouseover", (event) => {
  logo.style.animation = "spin 1s infinite linear";
  logo.style.scale = "1.2";
});

logo.addEventListener("mouseout", (event) => {
  logo.style.animation = "spin 30s infinite linear";
  logo.style.scale = "1";
});

/**Logo frontpage */
logo.addEventListener("click", (event) => {
  welcomePage.style.visibility = "visible";
  aboutPage.style.visibility = "hidden";
  projectPage.style.visibility = "hidden";
  contactPage.style.visibility = "hidden";
  placeholder.textContent = "";
});
