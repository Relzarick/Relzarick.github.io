const ytbox = document.getElementById("box-1");
const spbox = document.getElementById("box-2");
const fccbox = document.getElementById("box-3");

let toggle = true;
const containerEventAction = (container) => {
  toggle = toggle ? false : true;
  toggle === true
    ? (container.style.display = "none")
    : (container.style.display = "block");
};

ytbox.addEventListener("click", function () {
  containerEventAction();
});
spbox.addEventListener("click", function () {
  containerEventAction();
});
fccbox.addEventListener("click", function () {
  containerEventAction();
});
