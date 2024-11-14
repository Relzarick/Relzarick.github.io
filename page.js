const ytBox = document.getElementById("box-1");
const spBox = document.getElementById("box-2");
const fccBox = document.getElementById("box-3");
const ytContainerText = document.getElementById("project-container-info-a");
const spContainerText = document.getElementById("project-container-info-b");
const fccContainerText = document.getElementById("project-container-info-c");

const burgerMenu = document.getElementById("burger-menu");
const dropDown = document.getElementById("nav-dropdown-menu");

//
const containerDisplay = (key) => {
  const domKeys = [
    { ytBox: "project-container-info-a", num: 0 },
    { spBox: "project-container-info-b", num: 1 },
    { fccBox: "project-container-info-c", num: 2 },
    { dropDown: "nav-dropdown-menu" },
  ];

  const foundItem = domKeys.find((item) => item.hasOwnProperty(key));
  const containerDom = document.getElementById(foundItem[key]);

  // need to get the numbers from the object array
  const containerNum = 1;

  if (foundItem) {
    containerDom.style.display = "none";
  }

  // need condidtion so i know to append
  if (9) {
    elementAppend(containerNum);
  }
};

const elementAppend = (num) => {
  // how do i know which sub container to append
  const parentElement = document.querySelectorAll(".sub-container-3-box");
};

//
const navDisplay = () => {};

// need work on burger menu toggle
// give scroll animation
const renderContainerItems = (key) => {
  containerDisplay(key);
  navDisplay();
};

const containerEventAction = (container, key) => {
  let toggled = true;
  toggled = !toggled;
  container.style.display = toggled ? "none" : "block";

  renderContainerItems(key);
};

// add color easteregg

ytContainerText.addEventListener("click", () =>
  containerEventAction(ytBox, "ytBox")
);
spContainerText.addEventListener("click", () =>
  containerEventAction(spBox, "spBox")
);
fccContainerText.addEventListener("click", () =>
  containerEventAction(fccBox, "fccBox")
);

burgerMenu.addEventListener("click", () =>
  containerEventAction(dropDown, "dropDown")
);
