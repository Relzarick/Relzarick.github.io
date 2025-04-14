const projectContainer = document.querySelector(".main-container-3");

const renderContainerItems = (id, container) => {
  const domKeys = {
    p1: "<h3 class='project-title'>Beginnings</h3> <p>Working on this was great fun. It taught me many small lessons, which I expanded on as I delved deeper. I got to try out using HTML and CSS, the foundation of web design.</p>",
    p2: "<h3 class='project-title'>Lessons and Growth</h3> <p>While not the most challenging project, I was really proud when I completed the app. It tested the basics and highlighted just how far I've come from builiding a simple calculator.</p>",
    p3: "<h3 class='project-title'>First Steps</h3> <p>This is my first experience working with APIs, this was a first attempt at using CSS to style the project in a more in-depth manner.</p>",
    p4: "<h3 class='project-title'>Trials and Triumphs</h3> <p>This project has honestly been a pain in the butt. There was so much I didn’t know and so much I’ve yet to learn, but it will serve as a strong foundation for my future planned projects.</p>",
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
    event.target.closest(".inner-sub-c3 p") ||
    event.target.closest(".next-icon")
  ) {
    const paragraph = event.target.id;

    const icon = document.querySelectorAll(".next-icon");
    const findId = Array.from(icon).find((icon) => icon.id === paragraph);
    if (findId) findId.style.display = "none";

    container.classList.add("shift-left");

    container.addEventListener("animationend", () => {
      container.classList.remove("shift-left");
      container.classList.add("slideToLeft");

      renderContainerItems(paragraph, container);
    });
  }
});

const pyDescription = document.querySelector(".python-texts");
const firstText = document.querySelector(".py-first");
const SecondText = document.querySelector(".py-second");

//! Below is used for display exclusive content
const pc = document.querySelectorAll(".pc");
const mobile = document.querySelectorAll(".phone");

const screenWidth = window.matchMedia("(max-width: 480px)"); //* Phone width

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

  firstText.style.display = "block";

  pyDescription.addEventListener("click", () => {
    [firstText.style.display, SecondText.style.display] =
      firstText.style.display === "block"
        ? ["none", "block"]
        : ["block", "none"];
  });

  //
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

// ! BACKEND STUFF
const terminal = document.querySelector("textarea");
let app = "budget";

terminal.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const action = terminal.value.split("\n").pop().toLocaleLowerCase().trim(); //* splits by \n and returns last val

    // console.log(action);

    if (action === "clear") {
      terminal.value = "";
      return;
    }

    if (action === "budget" || action === "password") {
      app = action;
      terminal.value += `\nSwitched to ${app} app\n`;
      return;
    }

    console.log(action, app);

    fetch("https://relzarick.pythonanywhere.com/process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: action,
        mode: app,
      }),
    })
      .then((reply) => reply.json()) // Converts response to JSON
      .then((obj) => {
        terminal.value += `\n${obj.response}\n`; // Parses data into next line
      })
      .catch((error) => console.error("Fetch Error:", error));
  }

  //
});
