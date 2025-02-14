const btn = document.querySelectorAll(".rps-btn");
const reset = document.getElementById("rps-reset-btn");

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const pickComputerMove = () => {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
};

const updateScoreElement = () => {
  document.querySelector(
    "#rps-score"
  ).innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

const playGame = (playerMove) => {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === 2) {
    if (computerMove === "rock") {
      result = "you lose.";
    } else if (computerMove === "paper") {
      result = " you win.";
    } else if (computerMove === "scissors") {
      result = "tie.";
    }
  } else if (playerMove === 1) {
    if (computerMove === "rock") {
      result = "you win.";
    } else if (computerMove === "paper") {
      result = " tie.";
    } else if (computerMove === "scissors") {
      result = "you lose.";
    }
  } else if (playerMove === 0) {
    if (computerMove === "rock") {
      result = "tie.";
    } else if (computerMove === "paper") {
      result = "you lose.";
    } else if (computerMove === "scissors") {
      result = "you win.";
    }
  }

  if (result === "you win.") {
    score.wins++;
  } else if (result === "you lose.") {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector("#rps-result").innerHTML = result;
  document.querySelector(
    "#rps-moves"
  ).innerHTML = `You <img class="rps-result-img" src= "images/${playerMove}-emoji.png"> <img class="rps-result-img" src= "images/${computerMove}-emoji.png"> Computer`;
};

const resetGame = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
};

btn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    playGame(index);
  });
});

// make the index === string

reset.addEventListener("click", resetGame);

// !

let price = 1.87;
// ? penny = one cent
// ? nickle = five cents
// ? dime = 10 cents
// ? quarter = 25 cents

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const purchaseBtn = document.getElementById("purchase-btn");
const userCash = document.getElementById("cash");
const changeDisplay = document.getElementById("change-due");
const drawerDisplay = document.getElementById("change-container");
// console.log(cid);

let changeDisplayDenominations = [];
let assignDenominations = {};

let changeOnHand =
  Number(cid.reduce((acc, curVal) => acc + curVal[1], 0).toFixed(2)) * 100;
//console.log(changeOnHand);

let arrayOrderReversed = cid.map((arr) => Math.round(arr[1] * 100)).reverse();
const centsArray = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
//console.log(arrayOrderReversed);

const check = () => {
  const cashGiven = Math.round(Number(userCash.value) * 100);
  const priceInCents = Math.round(price * 100);
  const changeDue = cashGiven - priceInCents;

  if (cashGiven < priceInCents) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cashGiven === priceInCents) {
    cal(changeDue, cashGiven);
    updateUi(0);
  } else if (changeDue > changeOnHand || !checkDenom(changeDue)) {
    updateUi(1);
  } else {
    cal(changeDue, cashGiven);
    updateUi(2);
  }
};

const checkDenom = (changeDue) => {
  // * used to check the array without modifying the original
  const tempArrayOrderReversed = [...arrayOrderReversed];

  for (let i = 0; i < tempArrayOrderReversed.length; i++) {
    // * the second condition checks if current arrOrderReversed has enough value to match centsArray
    while (
      changeDue >= centsArray[i] &&
      tempArrayOrderReversed[i] >= centsArray[i]
    ) {
      // * still have to simulate deductions if it returns true it will proceed to next else block
      changeDue -= centsArray[i];
      tempArrayOrderReversed[i] -= centsArray[i];
    }
  }
  return changeDue === 0;
};

const cal = (change, cashGiven) => {
  let noChange = true;
  changeDisplayDenominations = [];
  // * assume that no changes will be made unless proven otherwise within the iteration

  if (cashGiven === 187) {
    // ! let doladola = cashGiven; (param are mutable)
    while (cashGiven > 0) {
      noChange = true;
      for (let i = 0; i < centsArray.length; i++) {
        if (
          cashGiven >= centsArray[i] &&
          cid[cid.length - 1 - i][1] * 100 >= centsArray[i]
        ) {
          cashGiven -= centsArray[i];
          updateCid(i, centsArray[i]);
          changeDisplayDenominations.push(centsArray[i]);
          noChange = false;
          break;
        }
      }
      if (noChange) {
        break;
      }
    }
  }

  while (change > 0) {
    noChange = true;
    for (let i = 0; i < centsArray.length; i++) {
      if (
        change >= centsArray[i] &&
        cid[cid.length - 1 - i][1] * 100 >= centsArray[i]
      ) {
        change -= centsArray[i];
        updateCid(i, centsArray[i]);
        // * break is used to exit the innder for loop first, restarting the while loop
        // * used to exit early after highest val is deducted, ensuring highest value is deducted first
        changeDisplayDenominations.push(centsArray[i]);
        //console.log(changeDisplayDenominations);

        noChange = false;
        break;
      }
    }
    if (noChange) {
      break;
    }
  }

  //console.log(changeOnHand);
  //console.log(arrayOrderReversed);
};

const updateCid = (index, cash) => {
  // * cents array index, to locate current value to update cid
  cid[cid.length - 1 - index][1] =
    Math.round(cid[cid.length - 1 - index][1] * 100 - cash) / 100;
  changeOnHand -= cash;
  arrayOrderReversed[index] -= cash;
  //console.log(cid);
};

const updateDenominationsUi = () => {
  assignDenominations = {};

  const denominations = {
    10000: "ONE HUNDRED",
    2000: "TWENTY",
    1000: "TEN",
    500: "FIVE",
    100: "ONE",
    25: "QUARTER",
    10: "DIME",
    5: "NICKEL",
    1: "PENNY",
  };
  changeDisplayDenominations.forEach((val) => {
    const key = denominations[val];
    if (assignDenominations[key]) {
      // * this checks if it exists, then adds it to the object
      assignDenominations[key] += val;
    } else {
      // * this will run if it does not exists, adding a new value to the object
      assignDenominations[key] = val;
    }
  });
  console.log(assignDenominations);

  let assignDenominationsString = "";
  // * the for loop will loop through the object and log the key into a string
  for (let key in assignDenominations) {
    if (assignDenominations.hasOwnProperty(key)) {
      assignDenominationsString += `${key}: $${
        Math.round((assignDenominations[key] / 100) * 100) / 100
      }<br>`;
    }
  }

  changeDisplay.innerHTML = `Status: OPEN<br>${assignDenominationsString}`;
};

const updateUi = (stat) => {
  drawerDisplay.innerHTML = `<h2>Change in Drawer:</h2>
        <p>Pennies: $${cid[0][1]}</p>
        <p>Nickels: $${cid[1][1]}</p>
        <p>Dimes: $${cid[2][1]}</p>
        <p>Quarters: $${cid[3][1]}</p>
        <p>Ones: $${cid[4][1]}</p>
        <p>Fives: $${cid[5][1]}</p>
        <p>Tens: $${cid[6][1]}</p>
        <p>Twenties: $${cid[7][1]}</p>
        <p>Hundreds: $${cid[8][1]}</p>`;

  if (stat === 0) {
    changeDisplay.style.display = "flex";
    changeDisplay.textContent = "No change due - customer paid with exact cash";
  } else if (stat === 1) {
    changeDisplay.style.display = "flex";
    changeDisplay.innerHTML = "Status: INSUFFICIENT_FUNDS";
  } else if (stat === 2) {
    changeDisplay.style.display = "flex";
    updateDenominationsUi();
  }
};

purchaseBtn.addEventListener("click", () => {
  check();
  userCash.value = "";
});

userCash.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    check();
    userCash.value = "";
  }
});
