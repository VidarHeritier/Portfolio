/**Welcome div */
const welcome = document.querySelector("#welcome");

/**Main and header */
const main = document.querySelector(".main");
const navbar = document.querySelector("#navbar");

/**Hamburger menu and items*/
const hamburgerMenu = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const hamburgerItem1 = document.querySelector(".ham1");
const hamburgerItem2 = document.querySelector(".ham2");
const hamburgerItem3 = document.querySelector(".ham3");
const hiddenBtn = document.querySelector(".hidden-btn");

/**Menu items */
const menuItems = document.querySelector(".menu-items");
const menuItem1 = document.querySelector(".menu-item1");
const menuItem2 = document.querySelector(".menu-item2");
const menuItem3 = document.querySelector(".menu-item3");

let isHamburgerOpen = false;

/**Hamburger menu hover anim */
hiddenBtn.addEventListener("mouseenter", (event) => {
  hamburgerItem1.style.boxShadow = "0.15vw 0.15vw 0.2vw rgb(31, 148, 132)";

  hamburgerItem1.style.transitionTimingFunction = "0.15s ease-in";
  hamburgerItem2.style.boxShadow = "0.15vw 0.15vw 0.2vw rgb(31, 148, 132)";

  hamburgerItem2.style.transitionTimingFunction = "0.2s ease-in";
  hamburgerItem3.style.boxShadow = "0.15vw 0.15vw 0.2vw rgb(31, 148, 132)";

  hamburgerItem3.style.transitionTimingFunction = "0.3s ease-in";
});

hiddenBtn.addEventListener("mouseleave", (event) => {
  hamburgerItem1.style.boxShadow = "0.1vw 0.1vw 0.05vw rgb(31, 148, 132)";

  hamburgerItem1.style.transitionTimingFunction = "0.2s ease-in";
  hamburgerItem2.style.boxShadow = "0.1vw 0.1vw 0.05vw rgb(31, 148, 132)";

  hamburgerItem2.style.transitionTimingFunction = "0.2s ease-in";
  hamburgerItem3.style.boxShadow = "0.1vw 0.1vw 0.05vw rgb(31, 148, 132)";

  hamburgerItem3.style.transitionTimingFunction = "0.2s ease-in";
});

/**Hamburger menu transformation */
hiddenBtn.addEventListener("click", (event) => {
  if (isHamburgerOpen === false) {
    hamburgerItem1.style.animation = "makeMenuItem1 1s forwards";
    hamburgerItem2.style.animation = "makeMenuItem2 .8s forwards";
    hamburgerItem3.style.animation = "makeMenuItem3 .6s forwards";
    hamburgerMenu.style.animation = "moveMenu 1s forwards";

    isHamburgerOpen = true;

    createLinks();
  }
});

/**Hamburger menu links */
const createLinks = () => {
  const about = document.createElement("div");
  const aboutText = document.createElement("h3");
  aboutText.textContent = "About";
  aboutText.style.animation = "fadeInText .4s forwards";
  about.append(aboutText);
  hamburgerItem1.append(about);

  const project = document.createElement("div");
  const projectText = document.createElement("h3");
  projectText.textContent = "Projects";
  projectText.style.animation = "fadeInText .4s forwards";
  project.append(projectText);
  hamburgerItem2.append(project);

  const contact = document.createElement("div");
  const contactText = document.createElement("h3");
  contactText.textContent = "Contact";
  contactText.style.animation = "fadeInText .4s forwards";
  contact.append(contactText);
  hamburgerItem3.append(contact);
};

/**Make menu item1 into its own about page */
menuItem1.addEventListener("click", (event) => {
  if (isHamburgerOpen === true) {
    menuItem2.style.animation = "moveDown .7s forwards";
    menuItem3.style.animation = "moveDown .7s forwards";
    welcome.remove();
    menuItem1.style.visibility = "hidden";

    setTimeout(() => {
      populateAboutPage();
    }, 150);

    isHamburgerOpen = false;

    setTimeout(() => {
      recreateHamburgerMenu();
    }, 200);
  }
});

/**Make menu item2 into its own porjects page */
menuItem2.addEventListener("click", (event) => {
  if (isHamburgerOpen === true) {
    menuItem2.style.visibility = "hidden";
    menuItem1.style.visibility = "hidden";
    menuItem3.style.animation = "moveDown .7s forwards";

    welcome.remove();

    setTimeout(() => {
      populateProjectsPage();
    }, 150);

    isHamburgerOpen = false;

    setTimeout(() => {
      recreateHamburgerMenu();
    }, 200);
  }
});

/**Make menu item3 into its own contact page */
menuItem3.addEventListener("click", (event) => {
  if (isHamburgerOpen === true) {
    menuItem3.style.visibility = "hidden";
    menuItem2.style.visibility = "hidden";
    menuItem1.style.visibility = "hidden";
    welcome.remove();

    // setTimeout(() => {
    //   populateAboutPage();
    // }, 150);

    isHamburgerOpen = false;

    setTimeout(() => {
      recreateHamburgerMenu();
    }, 200);
  }
});

/**Populating the projects page */
const populateProjectsPage = () => {
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");

  /**Making arrow components */
  const leftArrow = document.createElement("div");
  leftArrow.classList.add("left-arrow");
  const leftArrowStyle = document.createElement("div");
  leftArrowStyle.classList.add("left-arrow-style");
  leftArrow.append(leftArrowStyle);
  const rightArrow = document.createElement("div");
  rightArrow.classList.add("right-arrow");
  const rightArrowStyle = document.createElement("div");
  rightArrowStyle.classList.add("right-arrow-style");
  rightArrow.append(rightArrowStyle);

  /**Project 1 creation */
  const project1 = document.createElement("div");
  project1.classList.add("project1");
  project1.classList.add("project-elements");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = "Projects";
  const project1IMG = new Image();
  project1IMG.src =
    "./Projects/5ffb88178839407.Y3JvcCwzMzYwLDI2MjgsMCwzNjU.jpg";
  const project1Text = document.createElement("h4");
  project1Text.textContent = "lorem ipsum1";
  project1.append(project1IMG, project1Text);

  /**Project 2 creation */
  const project2 = document.createElement("div");
  project2.classList.add("project2");
  project2.classList.add("project-elements");
  const project2IMG = new Image();
  project2IMG.src =
    "./Projects/8b3317178642685.Y3JvcCw1NTIzLDQzMjAsMTgzMSww.png";
  const project2Text = document.createElement("h4");
  project2Text.textContent = "lorem ipsum2";
  project2.append(project2IMG, project2Text);

  /**Project 3 creation */
  const project3 = document.createElement("div");
  project3.classList.add("project3");
  project3.classList.add("project-elements");
  const project3IMG = new Image();
  project3IMG.src =
    "./Projects/depositphotos_403126704-stock-illustration-architecture-project-showing-different-design.jpg";
  const project3Text = document.createElement("h4");
  project3Text.textContent = "lorem ipsum3";
  project3.append(project3IMG, project3Text);

  /**Project 4 creation */
  const project4 = document.createElement("div");
  project4.classList.add("project4");
  project4.classList.add("project-elements");
  const project4IMG = new Image();
  project4IMG.src = "./Projects/img-issues-incidents-management-process.png";
  const project4Text = document.createElement("h4");
  project4Text.textContent = "lorem ipsum4";
  project4.append(project4IMG, project4Text);

  /**Project 5 creation */
  const project5 = document.createElement("div");
  project5.classList.add("project5");
  project5.classList.add("project-elements");
  const project5IMG = new Image();
  project5IMG.src = "./Projects/IMG_3151-1024x1024.jpg";
  const project5Text = document.createElement("h4");
  project5Text.textContent = "lorem ipsum5";
  project5.append(project5IMG, project5Text);

  const projectPage = document.createElement("div");
  projectPage.classList.add("project-page");
  projectPage.style.animation = "expandMenuItem2 1.5s forwards";

  /**All elements in main div */
  const projectHeaderDiv = document.createElement("div");
  projectHeaderDiv.classList.add("project-header");
  const projectHeader = document.createElement("h3");
  projectHeader.textContent = "Projects";
  projectHeaderDiv.style.animation = "moveProjectHeader 1s forwards";
  projectHeaderDiv.append(projectHeader);

  projectsDiv.append(
    leftArrow,
    project1,
    project2,
    project3,
    project4,
    project5,
    rightArrow
  );
  projectPage.append(projectsDiv);
  main.append(projectPage);
  navbar.append(projectHeaderDiv);
};

/**Populating the projects page */
const populateAboutPage = () => {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");
  const aboutText = document.createElement("p");
  aboutText.textContent = "lorem20 lorem20 lorem20 lorem20";
  aboutDiv.append(aboutText);
};

/**Recreate hamburger menu */
const recreateHamburgerMenu = () => {
  hamburgerItem1.style.animation = "";
  hamburgerItem2.style.animation = "";
  hamburgerItem3.style.animation = "";
  hamburgerMenu.style.animation = "";
  menuItem1.style.animation = "";
  menuItem2.style.animation = "";
  menuItem3.style.animation = "";
  menuItem1.style.visibility = "visible";
  menuItem2.style.visibility = "visible";
  menuItem3.style.visibility = "visible";
  hamburgerItem1.innerHTML = "";
  hamburgerItem2.innerHTML = "";
  hamburgerItem3.innerHTML = "";
  hamburgerItem1.style.animation = "backIn .5s forwards";
  hamburgerItem2.style.animation = "backIn2 .6s forwards";
  hamburgerItem3.style.animation = "backIn .6s forwards";
};
