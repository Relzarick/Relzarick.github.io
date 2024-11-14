const ytBox = document.getElementById("box-1");
const spBox = document.getElementById("box-2");
const fccBox = document.getElementById("box-3");
const ytContainerText = document.getElementById("project-container-info-a");
const spContainerText = document.getElementById("project-container-info-b");
const fccContainerText = document.getElementById("project-container-info-c");

const burgerMenu = document.getElementById("burger-menu");
const dropDown = document.getElementById("burger-menu");

//
const containerDisplay = (key, num) => {
  const domKeys = [
    { ytBox: "project-container-info-a", num: 0 },
    { spBox: "project-container-info-b", num: 1 },
    { fccBox: "project-container-info-c", num: 2 },
    { dropDown: "burger-menu" },
  ];

  const foundItem = domKeys.find((item) => item.hasOwnProperty(key));
  // above gets me the object
  const containerDom = document.getElementById(foundItem[key]);
  const containerNum = domKeys[num].num;

  if (foundItem) {
    // need nav to be seperate from this
    // use !==
    containerDom.style.display = "none";
  }

  // need condidtion so i know to append???
  if (9) {
    elementAppend(containerNum);
  }
};

const elementAppend = (num) => {
  const parentElement = document.querySelectorAll(".sub-container-3-box");
};

//
const navDisplay = () => {};

// need work on burger menu toggle
// give scroll animation
const renderContainerItems = (key, num) => {
  containerDisplay(key, num);
  navDisplay();
};

const containerEventAction = (container, key, num) => {
  let toggled = true;
  toggled = !toggled;
  container.style.display = toggled ? "none" : "block";

  renderContainerItems(key, num);
};

// add color easteregg

ytContainerText.addEventListener("click", () =>
  containerEventAction(ytBox, "ytBox", 0)
);
spContainerText.addEventListener("click", () =>
  containerEventAction(spBox, "spBox", 1)
);
fccContainerText.addEventListener("click", () =>
  containerEventAction(fccBox, "fccBox", 2)
);

burgerMenu.addEventListener("click", () =>
  containerEventAction(dropDown, "dropDown")
);
