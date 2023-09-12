/**Hamburger menu and items*/
const hamburgerMenu = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const hamburgerItem1 = document.querySelector(".ham1");
const hamburgerItem2 = document.querySelector(".ham2");
const hamburgerItem3 = document.querySelector(".ham3");

/**Menu items */
const menuItem1 = document.querySelector(".menu-item1");
const menuItem2 = document.querySelector(".menu-item2");
const menuItem3 = document.querySelector(".menu-item3");

/**Hamburger menu transformation */
hamburgerMenu.addEventListener(
  "click",
  (event) => {
    hamburgerItem1.style.animation = "makeMenuItem1 1s forwards";
    hamburgerItem2.style.animation = "makeMenuItem2 .8s forwards";
    hamburgerItem3.style.animation = "makeMenuItem3 .6s forwards";
    hamburgerMenu.style.animation = "moveMenu 1s forwards";

    createLinks();
    menuAddClasses();
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
  projectText.textContent = "Project";
  project.append(projectText);
  hamburgerItem2.append(project);

  const contact = document.createElement("div");
  const contactText = document.createElement("h3");
  contactText.textContent = "Contact";
  contact.append(contactText);
  hamburgerItem3.append(contact);
};

/**Transforming hamburger menu classes to link classes */
const menuAddClasses = () => {
  hamburgerItem1.classList.add("menu-item1");
  hamburgerItem2.classList.add("menu-item2");
  hamburgerItem3.classList.add("menu-item3");
};

/**Make menu items into their own page */
const makeMenuIntoFullPage = () => {
  hamburgerItem1.style.height = "100rem";
};

/**Run make full page */
