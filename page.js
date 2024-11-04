const ytBox = document.getElementById("box-1");
const spBox = document.getElementById("box-2");
const fccBox = document.getElementById("box-3");
const ytContainerText = document.getElementById("project-container-info-a");
const spContainerText = document.getElementById("project-container-info-b");
const fccContainerText = document.getElementById("project-container-info-c");

let toggled = false;
const containerEventAction = (container) => {
  toggled = !toggled;
  container.style.display = toggled ? "none" : "block";
};

ytContainerText.addEventListener("click", () => containerEventAction(ytBox));
spContainerText.addEventListener("click", () => containerEventAction(spBox));
fccContainerText.addEventListener("click", () => containerEventAction(fccBox));
