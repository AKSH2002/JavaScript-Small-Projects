const card = document.querySelector("#card");
const total = document.querySelector("#total");
const message = document.querySelector("#message");
const addCardButton = document.querySelector("#addCard");
const newGameButton = document.querySelector("#newGame");

let cardValue = 0;
let totalValue = 0;

addCardButton.addEventListener("click", function () {
  if (cardValue >= 10) {
    cardValue = 1;
  } else {
    cardValue++;
  }

  card.textContent = cardValue;
  totalValue += cardValue;
  total.textContent = `Total: ${totalValue}`;

  if (totalValue === 21) {
    message.textContent = "You win the game! +200 added to the total balance.";
    totalValue += 200;
    total.textContent = `Total: ${totalValue}`;
  } else if (totalValue > 21) {
    message.textContent = "You lose the game! -200 subtracted from the total balance.";
    totalValue -= 200;
    total.textContent = `Total: ${totalValue}`;
  }
});

newGameButton.addEventListener("click", function () {
  cardValue = 0;
  totalValue = 0;
  card.textContent = cardValue;
  total.textContent = `Total: ${totalValue}`;
  message.textContent = "";
});
