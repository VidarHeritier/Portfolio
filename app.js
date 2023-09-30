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
  menu.style.animation = "menuAnim .3s ease";
  menuItems.forEach((element) => (element.style.visibility = "visible"));
  menu.style.position = "relative";
  menu.style.left = "0vw";
  menu.style.justifyContent = "center";
  welcomePage.style.visibility = "hidden";
  restartAnimation(menu, "menuAnim .3s ease");
};

const switchToPage = (page, headerText, pageContent) => {
  const textElements = document.querySelectorAll(".text");

  textElements.forEach((text) => {
    text.style.visibility = "hidden";
  });

  menuItems.forEach((element) => (element.style.visibility = "hidden"));

  page.style.visibility = "visible";
  placeholder.textContent = headerText;
  restartAnimation(placeholder, "pageHeader 0.3s forwards");

  hamburgerItems.forEach((element) => (element.style.visibility = "visible"));
  restartAnimation(hamburgerItem1, "backIn .5s forwards");
  restartAnimation(hamburgerItem2, "backIn2 .6s forwards");
  restartAnimation(hamburgerItem3, "backIn .6s forwards");
  if (pageContent) {
    pageContent.style.visibility = "visible";
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
  welcomePage.style.animation = "fadeInText .3s ease-in";

  [
    aboutPage,
    aboutText,
    projectPage,
    projectText,
    contactText,
    contactPage,
  ].forEach((pages) => (pages.style.visibility = "hidden"));
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
/**LOGO anim */
logo.addEventListener("mouseover", () => {
  playAnimation(logo, "swirl .06s infinite linear");
});

logo.addEventListener("mouseout", resetLogo);

logo.addEventListener("click", showWelcomePage);

/**Span maker just for fun */
const prebenStyle = document.querySelector("#preben");
const prebensAssRay = ["html", "CSS", "Figma", "JavaScript", "React"];
prebensAssRay.forEach((ass, i) => {
  if (i < prebensAssRay.length - 1) {
    prebenStyle.innerHTML += `<span class="brepen">${ass}</span>, `;
  } else {
    prebenStyle.innerHTML += `<span class="brepen">${ass}</span> `;
  }
});
