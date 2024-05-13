/**Querries */
/** Menu*/
const menu = document.querySelector("#menu-container");
const menuItems = document.querySelectorAll(".menu");
const menuItemsArray = Array.from(document.querySelectorAll(".menu"));
/**Logo */
const logo = document.querySelector("#logo");
/**Hamburger */
const hamburger = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const hamburgerItem1 = document.querySelector(".ham1");
const hamburgerItem2 = document.querySelector(".ham2");
const hamburgerItem3 = document.querySelector(".ham3");
/**Empty page container */
const empty = document.querySelector(".empty");
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
const projectImgs1 = document.querySelector(".project-imgs1");

/**Project images array */
const projects = [
  {
    key: "project1",
    src: "/Images/Trottier_M31SW_APOD_Re.jpg",
    alt: "M31 Galaxy (Trottier, M31SW APOD Re)",
    title: "M31 Galaxy",
    description: "dsjfdlj",
  },
  {
    key: "project2",
    src: "/Images/Uranus.jpg",
    alt: "Planet Uranus",
    title: "Uranus",
    description: "fsfsdfd",
  },
  {
    key: "project3",
    src: "/Images/Venus.jpeg",
    alt: "Planet Venus",
    title: "Venus",
    description: "sfsdffdsf",
  },
];

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

/**LOGO anim */
logo.addEventListener("mouseover", () => {
  playAnimation(
    logo,
    "spin 2s infinite linear, scale 1s ease-out forwards, rotate 2.2s ease"
  );
});

logo.addEventListener("mouseout", () => {
  if (isAnimationPlaying) {
    setTimeout(() => {
      logo.style.animation = "ease-out-spin 1s ease-out forwards";
      isAnimationPlaying = false;
    }, 500);
  }
});

logo.addEventListener("click", () => {
  aboutText.style.visibility = "hidden";
  projectText.style.visibility = "hidden";
  projectImgs1.style.visibility = "hidden";
  contactText.style.visibility = "hidden";
  showWelcomePage();
});
/**Logo anim reset */
const resetLogo = () => {
  restartAnimation(logo, "spin 30s infinite linear");
  logo.style.scale = "1";
  isAnimationPlaying = false;
};

/**Hamburgermenu anim */
const showMenu = () => {
  hamburgerItems.forEach((element) => (element.style.visibility = "hidden"));
  menu.style.visibility = "visible";

  menuItems.forEach((element) => {
    element.style.visibility = "visible";
    element.style.animation = "menuAnim .3s ease-in";

    element.addEventListener("animationend", () => {
      element.style.animation = "";
    });
  });

  if (window.matchMedia("(orientation: portrait)").matches) {
    welcomePage.style.animation = "portraitWelcome .3s ease-in forwards";
  } else {
    welcomePage.style.animation = "scaleWelcome .3s ease-in forwards";
  }
  hamburger.style.cursor = "default";
};

/**Menu close when click detected outside */
const documentClickListener = (event) => {
  if (
    menuItemsArray.some((menuItem) => menuItem.style.visibility === "visible")
  ) {
    const isClickedInsideMenu =
      menu.contains(event.target) || hamburger.contains(event.target);
    if (isClickedInsideMenu) {
      event.stopPropagation();
      return;
    }

    welcomePage.style.animation = "rescaleWelcome .3s ease-in forwards";

    menuItems.forEach((menuItem) => {
      menuItem.style.animation = "menuHide .3s ease-in forwards";
    });

    setTimeout(() => {
      menuItems.forEach((menuItem) => (menuItem.style.visibility = "hidden"));
    }, 300);

    hamburger.style.cursor = "pointer";

    hamburgerItems.forEach((element) => (element.style.visibility = "visible"));
    restartAnimation(hamburgerItem1, "backIn .5s forwards");
    restartAnimation(hamburgerItem2, "backIn2 .6s forwards");
    restartAnimation(hamburgerItem3, "backIn .6s forwards");
  }
};

document.addEventListener("click", documentClickListener);

/**Menu click events */
aboutLink.addEventListener("click", () => {
  welcomePage.style.visibility = "hidden";
  hamburger.style.cursor = "pointer";
});

contactLink.addEventListener("click", () => {
  welcomePage.style.visibility = "hidden";
  hamburger.style.cursor = "pointer";
});

projectLink.addEventListener("click", () => {
  welcomePage.style.visibility = "hidden";
  hamburger.style.cursor = "pointer";
});

/** Pages*/
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
    restartAnimation(projectText, "fadeInText 1.8s forwards");
    restartAnimation(contactText, "fadeInText2 0.6s forwards");
    restartAnimation(projectImgs1, "fadeInProjects 0.6s forwards");
  }

  if (pageContent == projectText) {
    projectImgs1.style.visibility = "visible";
  } else {
    projectImgs1.style.visibility = "hidden";
  }
};

// Loop through each project object in the array
projects.forEach((project) => {
  const img = document.createElement("img");
  img.key = project.key;
  img.src = project.src;
  img.alt = project.alt;
  img.title = project.title;
  img.description = project.description;
  img.classList.add(img.key);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("big-project");

  const imageText = document.createElement("p");
  imageText.textContent = project.description;
  imageText.classList.add("projectdesc");

  img.addEventListener("click", enlargeImage);

  imgContainer.appendChild(img);
  imgContainer.appendChild(imageText);
  projectImgs1.appendChild(imgContainer);

  projectImgs1.style.animation = "fadeInProjects .3s ease-in forwards";

  /**Project handling */

  function enlargeImage(event) {
    const clickedImg = event.target;

    imgContainer.style.animation = "bigProj 1.3s ease-in forwards";

    imageText.style.animation = "bigProjDesc 2s ease-in forwards";

    clickedImg.addEventListener("click", () => {
      projectImgs1.removeChild(imgContainer);
    });
  }
});

/**Show the welcome page */
function showWelcomePage(pageContent) {
  welcomePage.style.visibility = "visible";
  welcomePage.style.animation = "fadeInText .3s ease-in";

  placeholder.textContent = "VirVar Vidar";

  restartAnimation(placeholder, "pageHeader 0.3s forwards");

  menuItems.forEach((element) => (element.style.visibility = "hidden"));

  hamburgerItems.forEach((element) => (element.style.visibility = "visible"));
  restartAnimation(hamburgerItem1, "backIn .5s forwards");
  restartAnimation(hamburgerItem2, "backIn2 .6s forwards");
  restartAnimation(hamburgerItem3, "backIn .6s forwards");
  if (pageContent) {
    pageContent.style.visibility = "visible";
    restartAnimation("unscramble 0.6s forwards");
  }
}

/**Open Menu click event */
hamburger.addEventListener("click", showMenu);

/**Links to pages */
aboutLink.addEventListener("click", () =>
  switchToPage(aboutPage, "Om", aboutText)
);
projectLink.addEventListener("click", () =>
  switchToPage(projectPage, "Prosjekter", projectText, projectImgs1)
);
contactLink.addEventListener("click", () =>
  switchToPage(contactPage, "Kontakt", contactText)
);

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

/**Navigation querries */
let currentPageIndex = 0;
const pages = [aboutPage, projectPage, contactPage];
let isOnLandingPage = true;
const scrollSensitivity = 500;

let isScrolling = false;
let isSwipe = false;

/** Swipe Detection (combined with touch events) */
let swipeDirection = 0;
let initialX = null;
let initialY = null;

window.addEventListener("touchstart", function (e) {
  initialX = e.changedTouches[0].clientX;
  initialY = e.changedTouches[0].clientY;
  initialTime = new Date();
});

window.addEventListener("touchend", function (e) {
  const deltaX = Math.abs(e.changedTouches[0].clientX - initialX);
  const deltaY = Math.abs(e.changedTouches[0].clientY - initialY);
  const deltaTime = new Date() - initialTime;

  if (deltaX >= 30 && deltaY <= 100 && deltaTime <= 300) {
    swipeDirection = -1 * Math.sign(e.changedTouches[0].clientX - initialX);
  }

  if (Math.abs(deltaX) >= 30 && deltaY <= 100 && deltaTime <= 300) {
    isSwipe = true;

    setTimeout(() => {
      isSwipe = false;
      handlePageChange(swipeDirection);
    }, 500);
  }
});

/** Arrow Key Events with Spacebar */

let keyDown = false;

document.addEventListener("keydown", (event) => {
  if (keyDown) return;

  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === " " ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    keyDown = true;
    handlePageChange(-1 * Math.sign(event.key.charCodeAt(0) - 38));
    event.preventDefault();
  }
});

document.addEventListener("keyup", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === " " ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    keyDown = false;
  }
});

/**Page change */

let lastCallTime = 0;
const throttleDelay = 400;

function handlePageChange(event) {
  if (isSwipe) return;

  const now = Date.now();

  if (now - lastCallTime >= throttleDelay) {
    const deltaY = event.deltaY;
    if (Math.abs(deltaY) > scrollSensitivity) {
      handlePageChange(-1 * Math.sign(deltaY));
    }
    welcomePage.style.visibility = "hidden";

    pages[currentPageIndex].style.visibility = "hidden";

    currentPageIndex =
      (currentPageIndex + swipeDirection + pages.length + 1) % pages.length;

    pages[currentPageIndex].style.visibility = "visible";

    switch (currentPageIndex) {
      case 1:
        switchToPage(aboutPage, "Om", aboutText);
        break;
      case 2:
        switchToPage(projectPage, "Prosjekter", projectText, projectImgs1);
        break;
      case 0:
        switchToPage(contactPage, "Kontakt", contactText);
        break;
    }

    hamburgerItems.forEach((element) => (element.style.visibility = "visible"));
    restartAnimation(hamburgerItem1, "");
    restartAnimation(hamburgerItem2, "");
    restartAnimation(hamburgerItem3, "");
    lastCallTime = now;
  }
}

document.addEventListener("wheel", handlePageChange);
