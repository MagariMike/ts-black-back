var firstCard = 10;
var secondCard = 4;
var cards = [firstCard, secondCard];
var sum = firstCard + secondCard;
var isAlive = true;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
var renderGame = function () {
    cardsEl.textContent = "Cards: ".concat(cards[0], " + ").concat(cards[1]);
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        console.log(message);
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        console.log(message);
    }
    else {
        message = "You're out of the game!";
        console.log(message);
        isAlive = false;
    }
};
var newCard = function () {
    var card = 7;
    sum += card;
    renderGame();
};
