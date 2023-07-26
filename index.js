var firstCard = 10;
var secondCard = 4;
var cards = [firstCard, secondCard];
var sum = firstCard + secondCard;
var isAlive = true;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
var getRandomCard = function () {
    return Math.floor(Math.random() * 13) + 1;
};
var startGame = function () {
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
