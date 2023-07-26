var cards = [];
var sum = 0;
var isAlive = false;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
function getRandomCard() {
    var randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}
var startGame = function () {
    isAlive = true;
    var firstCard = getRandomCard();
    var secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};
var renderGame = function () {
    cardsEl.textContent = "Cards: ";
    for (var i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
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
    messageEl.textContent = message;
};
var newCard = function () {
    var card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
};
