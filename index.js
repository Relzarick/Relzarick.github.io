const projectContainer = document.querySelector(".main-container-3");

const renderContainerItems = (id, container) => {
  const domKeys = {
    p1: "<div class='v-line fade-in'></div><p class='fade-in'>Gained experience in creating layout structures with HTML and organizing content. Developed CSS styling skills, including color, font, and element positioning.</p>",
    p2: "<div class='v-line fade-in'></div><p class='fade-in'>Learnt the basics of JavaScript syntax, including variables, data types, and operators. Learnt about scope and variable declaration. Gained an understanding of functions and how to create and call them.</p>",
    p3: "<div class='v-line fade-in'></div><p class='fade-in'>Started to really get into the complexity of JavaScript. Enhanced problem-solving by debugging and refining code for design and functionality. Expanded my understanding of JavaScript events, handling user interactions like clicks and keyboard inputs.</p>",
    p4: "<div class='v-line fade-in'></div><p class='fade-in'>Became familiar with scope, closures, and how they affect variable access and function execution. Explored objects and arrays in-depth, understanding how to store and manipulate data.</p>",
  };

  console.log(domKeys[id]);
  console.log(container);

  container.innerHTML = "";
  container.innerHTML += domKeys[id];
};

projectContainer.addEventListener("click", (event) => {
  // * Finds the nearest ancestor element
  const container = event.target.closest(".inner-sub-c3");

  if (
    (event.target && event.target.closest(".inner-sub-c3a p")) ||
    event.target.closest(".next-icon")
  ) {
    const paragraph = event.target.id;
    renderContainerItems(paragraph, container);
  }
});

// ! Below is used for display exclusive content
const pc = document.querySelectorAll(".pc");
const mobile = document.querySelectorAll(".phone");
const screenWidth = window.matchMedia("(max-width: 460px)");

// ? This is for the POPUP
const returnImg = document.querySelector(".return");
const popUp = document.querySelector(".pop-up");

if (screenWidth.matches) {
  pc.forEach((pc) => (pc.style.display = "none"));
  mobile.forEach((mobile) => {
    mobile.style.display = "block";
  });

  // * POPUP
  returnImg.addEventListener("click", () => {
    popUp.style.display = "none";
  });
} else {
  mobile.forEach((mobile) => (mobile.style.display = "none"));
  pc.forEach((pc) => (pc.style.display = "block"));
}
