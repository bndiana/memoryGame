document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "imgs/fries.png",
    },
    {
      name: "fries",
      img: "imgs/fries.png",
    },
    {
      name: "cheeseburger",
      img: "imgs/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "imgs/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "imgs/hotdog.png",
    },
    {
      name: "hotdog",
      img: "imgs/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "imgs/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "imgs/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "imgs/milkshake.png",
    },
    {
      name: "milkshake",
      img: "imgs/milkshake.png",
    },
    {
      name: "pizza",
      img: "imgs/pizza.png",
    },
    {
      name: "pizza",
      img: "imgs/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "imgs/blank.png");
      card.setAttribute("data-id", i);
      card.style.width = "100px";
      card.style.height = "100px";
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match!");
      cards[optionOneId].setAttribute("src", "imgs/white.png");
      cards[optionTwoId].setAttribute("src", "imgs/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "imgs/blank.png");
      cards[optionTwoId].setAttribute("src", "imgs/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    // console.log(this);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
