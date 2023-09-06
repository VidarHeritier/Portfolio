const hamburgerMenu = document.querySelector("#ham-container");
const hamburgerItems = document.querySelectorAll(".ham");
const hamburgerItem1 = document.querySelector(".ham1");
const hamburgerItem2 = document.querySelector(".ham2");
const hamburgerItem3 = document.querySelector(".ham3");

hamburgerMenu.addEventListener("click", (event) => {
  hamburgerItem1.style.animation = "makeMenuItem1 .9s forwards";
  hamburgerItem2.style.animation = "makeMenuItem2 .8s forwards";
  hamburgerItem3.style.animation = "makeMenuItem3 .7s forwards";

  createLinks();
});

const createLinks = () => {
  const about = document.createElement("div");
  const aboutText = document.createElement("h3");
  aboutText.textContent = "About";
  about.append(aboutText);
  hamburgerItem1.append(about);
  console.log(createLinks);
};
