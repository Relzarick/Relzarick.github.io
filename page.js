const ytBox = document.getElementById("box-1");
const spBox = document.getElementById("box-2");
const fccBox = document.getElementById("box-3");
const ytContainerText = document.getElementById("project-container-info-a");
const spContainerText = document.getElementById("project-container-info-b");
const fccContainerText = document.getElementById("project-container-info-c");

const burgerMenu = document.querySelector(".burger-menu");
const navContents = document.querySelectorAll(".js-navbar");
const navContainer = document.querySelector(".nav-div-container");
const navSubContainer = document.querySelector(".nav-div-subcontainer");

//

const elementAppend = (num) => {
  const containerTexts = [
    {
      pointOne:
        "Gained experience in creating layout structures with HTML and organizing content.",
      pointTwo:
        "Developed CSS styling skills, including color, font, and element positioning.",
      pointThree:
        "Enhanced problem-solving by debugging and refining code for design and functionality.",
    },
    {
      pointOne:
        "Learned basics of JavaScript syntax, including variables, data types, and operators.",
      pointTwo: "Learned about scope and variable declaration ",
      pointThree:
        "Gained an understanding of functions and how to create and call them.",
    },
    {
      pointOne:
        "Became familiar with scope, closures, and how they affect variable access and function execution.",
      pointTwo:
        "Explored objects and arrays in-depth, understanding how to store and manipulate data.",
      pointThree:
        "Learned how to work with JavaScript events, handling user interactions like clicks and keyboard inputs.",
    },
  ];

  //console.log(containerTexts[0].pointOne);

  const parentElement = document.querySelectorAll(".sub-container-3-box");
  //console.log(parentElement[num]);
  parentElement[num].innerHTML += `<ul class= "bullet-points fade-in">
  <li class= "points">${containerTexts[num].pointOne}</li>
  <li class= "points">${containerTexts[num].pointTwo}</li>
  <li class= "points">${containerTexts[num].pointThree}</li>
  </ul>`;
};

//
const navDisplay = () => {
  navContents.forEach((elem) => {
    elem.classList.toggle("nav-toggle");
  });
  navContainer.classList.toggle("nav-background");
  burgerMenu.classList.toggle("burger-filter");
};

const renderContainerItems = (key, num) => {
  const domKeys = [
    { ytBox: "project-container-info-a", num: 0 },
    { spBox: "project-container-info-b", num: 1 },
    { fccBox: "project-container-info-c", num: 2 },
    { burgerMenu: "burger-menu", num: 3 },
  ];

  const foundItem = domKeys.find((item) => item.hasOwnProperty(key));
  //console.log(foundItem[key]);
  const containerDom = document.getElementById(foundItem[key]);
  const containerNum = domKeys[num].num;
  //console.log(containerNum);

  if (containerNum <= 2) {
    containerDom.style.display = "none";
    elementAppend(containerNum);
  } else {
    navDisplay();
  }
};

const containerEventAction = (container, key, num) => {
  let toggled = true;
  toggled = !toggled;
  container.style.display = toggled ? "none" : "block";

  renderContainerItems(key, num);
};

ytContainerText.addEventListener("click", () =>
  containerEventAction(ytBox, "ytBox", 0)
);
spContainerText.addEventListener("click", () =>
  containerEventAction(spBox, "spBox", 1)
);
fccContainerText.addEventListener("click", () =>
  containerEventAction(fccBox, "fccBox", 2)
);

// idk how to not make mouseout not glitch the thingy
// for now fix other stuff b4 trying mouseover
burgerMenu.addEventListener("click", () =>
  containerEventAction(burgerMenu, "burgerMenu", 3)
);
// navSubContainer.addEventListener("mouseout", () =>
//   containerEventAction(burgerMenu, "burgerMenu", 3)
// );
