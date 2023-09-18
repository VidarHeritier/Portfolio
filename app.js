/**Welcome div */
const welcome = document.querySelector("#welcome");

/**Hamburger menu and items*/
const hamburgerMenu = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const hamburgerItem1 = document.querySelector(".ham1");
const hamburgerItem2 = document.querySelector(".ham2");
const hamburgerItem3 = document.querySelector(".ham3");

/**Menu items */
const menuItems = document.querySelector(".menu-items");
const menuItem1 = document.querySelector(".menu-item1");
const menuItem2 = document.querySelector(".menu-item2");
const menuItem3 = document.querySelector(".menu-item3");

let isHamburgerOpen = false;
/**Hamburger menu transformation */
hamburgerMenu.addEventListener(
  "click",
  (event) => {
    hamburgerItem1.style.animation = "makeMenuItem1 1s forwards";
    hamburgerItem2.style.animation = "makeMenuItem2 .8s forwards";
    hamburgerItem3.style.animation = "makeMenuItem3 .6s forwards";
    hamburgerMenu.style.animation = "moveMenu 1s forwards";

    isHamburgerOpen = true;

    createLinks();
  },
  { once: true }
);

/**Hamburger menu links */
const createLinks = () => {
  const about = document.createElement("div");
  const aboutText = document.createElement("h3");
  aboutText.textContent = "About";
  about.append(aboutText);
  hamburgerItem1.append(about);

  const project = document.createElement("div");
  const projectText = document.createElement("h3");
  projectText.textContent = "Projects";
  project.append(projectText);
  hamburgerItem2.append(project);

  const contact = document.createElement("div");
  const contactText = document.createElement("h3");
  contactText.textContent = "Contact";
  contact.append(contactText);
  hamburgerItem3.append(contact);
};

// /**Transforming hamburger menu classes to link classes */
// const menuAddClasses = () => {
//   hamburgerItem1.classList.add("menu-item1");
//   hamburgerItem2.classList.add("menu-item2");
//   hamburgerItem3.classList.add("menu-item3");
// };

/**Make menu item1 into its own about page */
menuItem1.addEventListener("click", (event) => {
  if (isHamburgerOpen === true) {
    menuItem2.style.visibility = "hidden";
    menuItem3.style.visibility = "hidden";
    welcome.remove();
    menuItem1.style.animation = "expandMenuItem1 1.5s forwards";
    menuItem1.classList.remove("ham");
    isHamburgerOpen = false;
  }
});

/**Make menu item2 into its own porjects page */
menuItem2.addEventListener("click", (event) => {
  if (isHamburgerOpen === true) {
    menuItem2.remove();
    menuItem1.remove();
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
    menuItem2.style.visibility = "hidden";
    menuItem1.style.visibility = "hidden";
    welcome.remove();
    menuItem3.style.animation = "expandMenuItem3 1.5s forwards";
    menuItem3.classList.remove("ham");

    isHamburgerOpen = false;
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
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = "Projects";
  const project1IMG = (src = "../Images/favicon.ico");
  const project1Text = document.createElement("h4");
  project1Text.textContent = "lorem ipsum";
  project1.append(project1IMG, project1Text);

  /**Project 2 creation */
  const project2 = document.createElement("div");
  project2.classList.add("project2");
  const project2IMG = (src = "../Images/favicon.ico");
  const project2Text = document.createElement("h4");
  project2Text.textContent = "lorem ipsum";
  project2.append(project2IMG, project2Text);

  /**Project 3 creation */
  const project3 = document.createElement("div");
  project3.classList.add("project3");
  const project3IMG = (src = "../Images/favicon.ico");
  const project3Text = document.createElement("h4");
  project3Text.textContent = "lorem ipsum";
  project3.append(project3IMG, project3Text);

  const projectPage = document.createElement("div");
  projectPage.classList.add("project-page");
  projectPage.style.animation = "expandMenuItem2 1.5s forwards";

  /**All elements in main div */
  const main = document.querySelector("main");
  const projectHeaderDiv = document.createElement("div");
  projectHeaderDiv.classList.add("project-header");
  const projectHeader = document.createElement("h3");
  projectHeader.textContent = "Projects";
  projectHeaderDiv.style.animation = "moveProjectHeader 1s forwards";
  projectHeaderDiv.append(projectHeader);

  projectsDiv.append(leftArrow, project1, project2, project3, rightArrow);
  projectPage.append(projectHeaderDiv, projectsDiv);
  main.append(projectPage);
};

/**Populating the projects page */
const populateAboutPage = () => {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");
  const aboutText = document.createElement("p");
  aboutText.textContent = "lorem20";
};

/**Recreate hamburger menu */
const recreateHamburgerMenu = () => {};
