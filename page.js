const ytBox = document.getElementById("box-1");
const spBox = document.getElementById("box-2");
const fccBox = document.getElementById("box-3");
const ytContainerText = document.getElementById("project-container-info-a");
const spContainerText = document.getElementById("project-container-info-b");
const fccContainerText = document.getElementById("project-container-info-c");

const burgerMenu = document.getElementById("burger-menu");
const dropDown = document.getElementById("nav-dropdown-menu");

let toggled = false;

const renderKeys = (keys) => {
  const key = keys;
  const renderItems = [
    { ytBox: "ytContainerText" },
    { spBox: "spContainerText" },
    { fccBox: "fccContainerText" },
    { dropDown: "dropDown" },
  ];

  const foundItem = renderItems.find((item) => item.hasOwnProperty(key));
  const containerDom = foundItem[key];
  // containerDom doesnt === the dom element
  console.log(containerDom === ytContainerText);

  if (foundItem) {
    containerDom.style.display = "none";
    console.log(containerDom);
  }
};

const renderContainerItems = (key) => {
  renderKeys(key);
};

const containerEventAction = (container, key) => {
  toggled = !toggled;
  container.style.display = toggled ? "none" : "block";
  renderContainerItems(key);
};

const navDisplay = () => {};

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
