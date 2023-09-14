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

/**Hamburger menu transformation */
hamburgerMenu.addEventListener(
  "click",
  (event) => {
    hamburgerItem1.style.animation = "makeMenuItem1 1s forwards";
    hamburgerItem2.style.animation = "makeMenuItem2 .8s forwards";
    hamburgerItem3.style.animation = "makeMenuItem3 .6s forwards";
    hamburgerMenu.style.animation = "moveMenu 1s forwards";

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

/**Make menu item1 into its own page */

menuItem1.addEventListener("click", (event) => {
  menuItem2.remove();
  menuItem3.remove();
  welcome.remove();
  menuItem1.style.animation = "expandMenuItem1 1.5s forwards";
  menuItem1.classList.remove("ham");
});

/**Make menu item1 into its own page */

menuItem2.addEventListener("click", (event) => {
  menuItem1.remove();
  menuItem3.remove();
  welcome.remove();
  menuItem2.style.animation = "expandMenuItem2 1.5s forwards";
  menuItem2.classList.remove("ham");
});

/**Make menu item1 into its own page */

menuItem3.addEventListener("click", (event) => {
  menuItem2.remove();
  menuItem1.remove();
  welcome.remove();
  menuItem3.style.animation = "expandMenuItem3 1.5s forwards";
  menuItem3.classList.remove("ham");
});
