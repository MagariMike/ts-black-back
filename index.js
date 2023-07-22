var firstCard = 10;
var secondCard = 4;
var sum = firstCard + secondCard;
var isAlive = true;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
var startGame = function () {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }
};
var newCard = function () {
    console.log("Drawing a new card from the deck!");
};
