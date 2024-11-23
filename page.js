const ytBox = document.getElementById("box-1");
const spBox = document.getElementById("box-2");
const fccBox = document.getElementById("box-3");
const ytContainerText = document.getElementById("project-container-info-a");
const spContainerText = document.getElementById("project-container-info-b");
const fccContainerText = document.getElementById("project-container-info-c");

const burgerMenu = document.getElementById("burger-menu");

//
const containerDisplay = (key, num) => {
  const domKeys = [
    { ytBox: "project-container-info-a", num: 0 },
    { spBox: "project-container-info-b", num: 1 },
    { fccBox: "project-container-info-c", num: 2 },
    { burgerMenu: "burger-menu" },
  ];

  const foundItem = domKeys.find((item) => item.hasOwnProperty(key));
  console.log(foundItem[key]);
  const containerDom = document.getElementById(foundItem[key]);
  const containerNum = domKeys[num].num;
  console.log(containerDom);

  // need nav to be seperate from this

  if (containerNum <= 2) {
    containerDom.style.display = "none";
    elementAppend(containerNum);
  }
};

const elementAppend = (num) => {
  const containerTexts = [
    ["skills learned blah blah blah"],
    ["playing around with js or bs"],
    ["something abt getting introduced to js"],
  ];
  //console.log(containerTexts[num]);

  const parentElement = document.querySelectorAll(".sub-container-3-box");
  //console.log(parentElement[num]);
  parentElement[
    num
  ].innerHTML += `<p class= 'bullet-points'>${containerTexts[num]}</p>`;
};

//
const navDisplay = () => {};

const renderContainerItems = (key, num) => {
  containerDisplay(key, num);
  //navDisplay();
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

burgerMenu.addEventListener("click", () =>
  containerEventAction(burgerMenu, "burgerMenu")
);
