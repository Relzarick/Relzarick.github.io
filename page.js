const ytBox = document.getElementById("box-1");
const spBox = document.getElementById("box-2");
const fccBox = document.getElementById("box-3");
const ytContainerText = document.getElementById("project-container-info-a");
const spContainerText = document.getElementById("project-container-info-b");
const fccContainerText = document.getElementById("project-container-info-c");

const burgerMenu = document.getElementById("burger-menu");
const dropDown = document.getElementById("nav-dropdown-menu");

// function name tbd
const elemSwitch = (key) => {
  const domKeys = [
    { ytBox: "project-container-info-a" },
    { spBox: "project-container-info-b" },
    { fccBox: "project-container-info-c" },
    { dropDown: "nav-dropdown-menu" },
  ];

  const foundItem = domKeys.find((item) => item.hasOwnProperty(key));
  const containerDom = document.getElementById(foundItem[key]);

  if (foundItem) {
    containerDom.style.display = "none";
    // add the elementappend function somewhere here
  }
};

const elementAppend = () => {
  // how do i know which sub container to append
  const parentElement = document.querySelectorAll(".sub-container-3-box");
};

const navDisplay = () => {};

// need work on burger menu toggle

const renderContainerItems = (key) => {
  elemSwitch(key);
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
