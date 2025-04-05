const projectContainer = document.querySelector(".main-container-3");

const renderContainerItems = (id, container) => {
  const domKeys = {
    p1: "<h3 class='project-title'>YouTube Clone</h3> <p class='fade-in'>Developed experience in creating layout structures with HTML, organizing content and CSS styling skills.</p>",
    p2: "<h3 class='project-title'>Rock Paper Scissors</h3> <p class='fade-in'>Working on it</p>",
    p3: "<h3 class='project-title'>Pokedex App</h3> <p class='fade-in'>This is my first experience working with APIs and utilizing HTML and CSS and JS a more in-depth manner to style the project.</p>",
    p4: "<h3 class='project-title'>Cash Register</h3> <p class='fade-in'>Gained familiarity with local and global scopes, and their influence on variable access and function execution. Explored objects and arrays in-depth, understanding how to store and manipulate data.</p>",
  };

  // console.log(domKeys[id]);
  // console.log(container);

  container.innerHTML = "";
  container.innerHTML += domKeys[id];
};

projectContainer.addEventListener("click", (event) => {
  //* Finds the nearest ancestor element
  const container = event.target.closest(".inner-sub-c3");

  if (
    (event.target && event.target.closest(".inner-sub-c3a p")) ||
    event.target.closest(".next-icon")
  ) {
    const paragraph = event.target.id;
    renderContainerItems(paragraph, container);
  }
});

//! Below is used for display exclusive content
const pc = document.querySelectorAll(".pc");
const mobile = document.querySelectorAll(".phone");
//* Phone width
const screenWidth = window.matchMedia("(max-width: 480px)");

//* This is for the POPUP
const returnImg = document.querySelector(".return");
const popUp = document.querySelector(".pop-up");

if (screenWidth.matches) {
  pc.forEach((pc) => (pc.style.display = "none"));
  mobile.forEach((mobile) => {
    mobile.style.display = "block";
  });
  returnImg.addEventListener("click", () => {
    popUp.style.display = "none";
  });
} else {
  mobile.forEach((mobile) => (mobile.style.display = "none"));
  pc.forEach((pc) => (pc.style.display = "block"));
}

//*

//! CARDS

const cards = document.querySelectorAll(".cards");
const cardsStack = document.querySelector(".cards-stack");

const rotateCards = () => {
  let angle = 0;

  cards.forEach((card, i) => {
    if (card.classList.contains("remove")) {
      card.style.transform = `translateY(-120vh) rotate(-48deg)`;
    } else {
      card.style.transform = `rotate(${angle}deg)`;
      angle -= 10;
      card.style.zIndex = cards.length - i;
    }
  });
};

window.addEventListener("scroll", () => {
  //TODO Need to study this more
  const distance = window.innerHeight / 2;
  const topval = cardsStack.getBoundingClientRect().top;
  let index = Math.floor(-1 * (topval / distance + 1));

  for (i = 0; i < cards.length; i++) {
    if (i <= index) {
      cards[i].classList.add("remove");
    } else {
      cards[i].classList.remove("remove");
    }
  }
  rotateCards();
});

//*

//! INTERSECTION OBSERVER

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#welcome");
  const projectSection = document.querySelector("#projects");

  const icons = document.querySelectorAll(".navbar-icon");
  const aboutNav = icons[1];
  const projectNav = icons[2];

  //* callback
  //* Check media for styles
  const callback = (elem) => {
    elem.forEach((e) => {
      if (e.isIntersecting) {
        if (e.target.id === "welcome") {
          aboutNav.classList.add("nb-b");
        } else if (e.target.id === "projects") {
          projectNav.classList.add("nb-b");
        }
      } else {
        if (e.target.id === "welcome") {
          aboutNav.classList.remove("nb-b");
        } else if (e.target.id === "projects") {
          projectNav.classList.remove("nb-b");
        }
      }
    });
  };

  //? Create observers instance
  const observer = new IntersectionObserver(callback);

  observer.observe(aboutSection);
  observer.observe(projectSection);
});
