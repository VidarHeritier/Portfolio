// /**Hamburger and menu items */

// const hamburger = document.querySelector("#ham-container");
// const hamburgerItems = document.querySelectorAll(".ham");
// const hamburgerItem1 = document.querySelector(".ham1");
// const hamburgerItem2 = document.querySelector(".ham2");
// const hamburgerItem3 = document.querySelector(".ham3");
// const menu = document.querySelector("#menu-container");
// const menuItems = document.querySelectorAll(".menu");
// const welcomePage = document.querySelector(".welcome-page");

// /**Transform Hamburger to menu */

// hamburger.addEventListener("click", (event) => {
//   hamburgerItems.forEach((element) => {
//     element.style.visibility = "hidden";
//   });
//   //   hamburger.style.transform = "translateX(50vw)";
//   menu.style.visibility = "visible";
//   menuItems.forEach((element) => {
//     element.style.visibility = "visible";
//   });
//   menu.style.position = "relative";
//   menu.style.left = "0vw";
//   menu.style.justifyContent = "center";
//   welcomePage.style.visibility = "hidden";
// });

// /**Query menu items and pages */
// const aboutLink = document.querySelector(".menu1");
// const projectLink = document.querySelector(".menu2");
// const contactLink = document.querySelector(".menu3");
// const aboutPage = document.querySelector(".about-page");
// const projectPage = document.querySelector(".project-page");
// const contactPage = document.querySelector(".contact-page");
// const placeholder = document.querySelector(".placeholder-text");

// /**Make pages */
// /**About page */
// const aboutText = document.querySelector(".about-text");

// aboutLink.addEventListener("click", (event) => {
//   aboutPage.style.visibility = "visible";
//   projectPage.style.visibility = "hidden";
//   contactPage.style.visibility = "hidden";
//   menuItems.forEach((element) => {
//     element.style.visibility = "hidden";
//   });
//   placeholder.textContent = "About";
//   placeholder.style.animation = "pageHeader 0.3s forwards";
//   hamburger.style.transform = "translateX(0vw)";
//   hamburgerItems.forEach((element) => {
//     element.style.visibility = "visible";
//   });
//   recreateHamburgerMenu();
//   aboutText.style.animation = "unscramble 0.6s forwards";
// });

// /**Project page */
// projectLink.addEventListener("click", (event) => {
//   projectPage.style.visibility = "visible";
//   contactPage.style.visibility = "hidden";
//   aboutPage.style.visibility = "hidden";
//   menuItems.forEach((element) => {
//     element.style.visibility = "hidden";
//   });
//   placeholder.textContent = "Projects";
//   placeholder.style.animation = "pageHeader 0.3s forwards";
//   hamburger.style.transform = "translateX(0vw)";
//   hamburgerItems.forEach((element) => {
//     element.style.visibility = "visible";
//   });
//   recreateHamburgerMenu();
// });

// /**Contact page */
// contactLink.addEventListener("click", (event) => {
//   contactPage.style.visibility = "visible";
//   projectPage.style.visibility = "hidden";
//   aboutPage.style.visibility = "hidden";
//   menuItems.forEach((element) => {
//     element.style.visibility = "hidden";
//   });
//   placeholder.textContent = "Contact";
//   placeholder.style.animation = "pageHeader 0.3s forwards";
//   hamburger.style.transform = "translateX(0vw)";
//   hamburgerItems.forEach((element) => {
//     element.style.visibility = "visible";
//   });
//   recreateHamburgerMenu();
// });

// /**Logo anim */
// const logo = document.querySelector("#logo");

// logo.addEventListener("mouseover", (event) => {
//   logo.style.animation = "spin 1s infinite linear";
//   logo.style.scale = "1.2";
// });

// logo.addEventListener("mouseout", (event) => {
//   logo.style.animation = "spin 30s infinite linear";
//   logo.style.scale = "1";
// });

// /**Logo 2 frontpage */
// logo.addEventListener("click", (event) => {
//   welcomePage.style.visibility = "visible";
//   aboutPage.style.visibility = "hidden";
//   projectPage.style.visibility = "hidden";
//   contactPage.style.visibility = "hidden";
//   placeholder.textContent = "";
// });

// /**Hamburger anim */
// const recreateHamburgerMenu = () => {
//   hamburgerItem1.style.animation = "backIn .5s forwards";
//   hamburgerItem2.style.animation = "backIn2 .6s forwards";
//   hamburgerItem3.style.animation = "backIn .6s forwards";
// };

const hamburger = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const menu = document.querySelector("#menu-container");
const menuItems = document.querySelectorAll(".menu");
const welcomePage = document.querySelector(".welcome-page");
const logo = document.querySelector("#logo");
const hamburgerItem1 = document.querySelector(".ham1");
const hamburgerItem2 = document.querySelector(".ham2");
const hamburgerItem3 = document.querySelector(".ham3");

let isAnimationPlaying = false;

const playAnimation = (element, animationName) => {
  if (!isAnimationPlaying) {
    element.style.animation = animationName;
    isAnimationPlaying = true;
  }
};

const restartAnimation = (element, animationName) => {
  element.style.animation = "none";
  void element.offsetWidth;
  element.style.animation = animationName;
};

const showMenu = () => {
  hamburgerItems.forEach((element) => (element.style.visibility = "hidden"));
  menu.style.visibility = "visible";
  menuItems.forEach((element) => (element.style.visibility = "visible"));
  menu.style.position = "relative";
  menu.style.left = "0vw";
  menu.style.justifyContent = "center";
  welcomePage.style.visibility = "hidden";
};

const switchToPage = (page, headerText, pageContent, animationName) => {
  const textElements = document.querySelectorAll(".text");

  textElements.forEach((text) => {
    text.style.visibility = "hidden";
  });

  menuItems.forEach((element) => (element.style.visibility = "hidden"));
  page.style.visibility = "visible";
  placeholder.textContent = headerText;
  restartAnimation(placeholder, "pageHeader 0.3s forwards");
  //   hamburger.style.transform = "translateX(0vw)";
  hamburgerItems.forEach((element) => (element.style.visibility = "visible"));
  restartAnimation(hamburgerItem1, "backIn .5s forwards");
  restartAnimation(hamburgerItem2, "backIn2 .6s forwards");
  restartAnimation(hamburgerItem3, "backIn .6s forwards");
  if (pageContent) {
    pageContent.style.visibility = "visible";
    // pageContent.style.animation = animationName;
    restartAnimation(aboutText, "unscramble 0.6s forwards");
  }
};

const resetLogo = () => {
  restartAnimation(logo, "spin 30s infinite linear");
  logo.style.scale = "1";
  isAnimationPlaying = false;
};

const showWelcomePage = () => {
  welcomePage.style.visibility = "visible";
  [aboutPage, projectPage, contactPage].forEach(
    (page) => (page.style.visibility = "hidden")
  );
  placeholder.textContent = "VirVar Vidar";
  restartAnimation(placeholder, "pageHeader 0.3s forwards");
};

hamburger.addEventListener("click", showMenu);

const aboutLink = document.querySelector(".menu1");
const projectLink = document.querySelector(".menu2");
const contactLink = document.querySelector(".menu3");
const aboutPage = document.querySelector(".about-page");
const projectPage = document.querySelector(".project-page");
const contactPage = document.querySelector(".contact-page");
const placeholder = document.querySelector(".placeholder-text");
const aboutText = document.querySelector(".about-text");
const projectText = document.querySelector(".project-text");
const contactText = document.querySelector(".contact-text");

aboutLink.addEventListener("click", () =>
  switchToPage(aboutPage, "About", aboutText, "unscramble 0.6s forwards")
);
projectLink.addEventListener("click", () =>
  switchToPage(projectPage, "Projects", projectText)
);
contactLink.addEventListener("click", () =>
  switchToPage(contactPage, "Contact", contactText)
);

logo.addEventListener("mouseover", () => {
  playAnimation(logo, "spin 1s infinite linear");
  logo.style.scale = "1.2";
});

logo.addEventListener("mouseout", resetLogo);

logo.addEventListener("click", showWelcomePage);

const prebenStyle = document.querySelector("#preben");
const prebensAssRay = ["html", "CSS", "Figma", "JavaScript", "React"];
prebensAssRay.forEach((ass, i) => {
  if (i < prebensAssRay.length - 1) {
    prebenStyle.innerHTML += `<span class="brepen">${ass}</span>, `;
  } else {
    prebenStyle.innerHTML += `<span class="brepen">${ass}</span> `;
  }
});
