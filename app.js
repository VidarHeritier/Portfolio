/**Querries */
/** Menu*/
const menu = document.querySelector("#menu-container");
const menuItems = document.querySelectorAll(".menu");
/**Logo */
const logo = document.querySelector("#logo");
/**Hamburger */
const hamburger = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const hamburgerItem1 = document.querySelector(".ham1");
const hamburgerItem2 = document.querySelector(".ham2");
const hamburgerItem3 = document.querySelector(".ham3");
/**Welcome page */
const welcomePage = document.querySelector(".welcome-page");
/**About page */
const aboutLink = document.querySelector(".menu1");
const aboutPage = document.querySelector(".about-page");
const aboutText = document.querySelector(".about-text");
/**Project page */
const projectLink = document.querySelector(".menu2");
const projectPage = document.querySelector(".project-page");
const projectText = document.querySelector(".project-text");
/**Contact Page */
const contactLink = document.querySelector(".menu3");
const contactPage = document.querySelector(".contact-page");
const contactText = document.querySelector(".contact-text");
/**Page Header */
const placeholder = document.querySelector(".placeholder-text");

/** Anim control*/
let isAnimationPlaying = false;

const playAnimation = (element, ...animationNames) => {
  if (!isAnimationPlaying) {
    const animations = animationNames.join(", ");
    element.style.animation = animations;
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
  //   menu.style.position = "relative";
  //   menu.style.left = "0vw";
  //   menu.style.justifyContent = "center";
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

  menuItems.forEach((element) => (element.style.visibility = "hidden"));

  hamburgerItems.forEach((element) => (element.style.visibility = "visible"));
  restartAnimation(hamburgerItem1, "backIn .5s forwards");
  restartAnimation(hamburgerItem2, "backIn2 .6s forwards");
  restartAnimation(hamburgerItem3, "backIn .6s forwards");
  if (pageContent) {
    pageContent.style.visibility = "visible";
    restartAnimation(aboutText, "unscramble 0.6s forwards");
  }
};

hamburger.addEventListener("click", showMenu);

/**Links to pages */
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
  playAnimation(
    logo,
    "spin 2s infinite linear, scale 0.5s ease-out forwards, rotate 2.2s ease"
  );
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
    prebenStyle.innerHTML += `<span class="brepen">${ass}</span>`;
  }
});

/**Cycle through pages on arrow press and scroll*/
let currentPageIndex = 0;
const pages = [aboutPage, projectPage, contactPage];

const scrollSensitivity = 50;

let isScrolling = false;
let isArrowPress = false;
let touchStartY;
let touchStartX;

document.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
  touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", (event) => {
  const touchEndY = event.changedTouches[0].clientY;
  const touchEndX = event.changedTouches[0].clientX;

  const deltaY = touchEndY - touchStartY;
  const deltaX = touchEndX - touchStartX;

  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    const direction = deltaY > 0 ? 1 : -1;
    setTimeout(() => {
      handlePageChange(direction);
    }, 500);
  } else {
    const direction = deltaX > 0 ? 1 : -1;
    setTimeout(() => {}, 500);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    if (!isArrowPress) {
      handlePageChange(event.key === "ArrowUp" ? -1 : 1);
      isArrowPress = true;

      setTimeout(() => {
        isArrowPress = false;
      }, 500);
    }
  }
});
document.addEventListener("wheel", (event) => {
  const scrollDirection = event.deltaY > 0 ? 1 : -1;

  if (Math.abs(event.deltaY) > scrollSensitivity && !isScrolling) {
    handlePageChange(scrollDirection);
    isScrolling = true;

    setTimeout(() => {
      isScrolling = false;
    }, 500);
  }
});

function handlePageChange(direction) {
  welcomePage.style.visibility = "hidden";

  pages[currentPageIndex].style.visibility = "hidden";

  currentPageIndex =
    (currentPageIndex + direction + pages.length) % pages.length;

  pages[currentPageIndex].style.visibility = "visible";

  switch (currentPageIndex) {
    case 0:
      switchToPage(aboutPage, "About", aboutText, "unscramble 0.6s forwards");
      break;
    case 1:
      switchToPage(projectPage, "Projects", projectText);
      break;
    case 2:
      switchToPage(contactPage, "Contact", contactText);
      break;
  }
  hamburgerItems.forEach((element) => (element.style.visibility = "visible"));
  restartAnimation(hamburgerItem1, "");
  restartAnimation(hamburgerItem2, "");
  restartAnimation(hamburgerItem3, "");
}
