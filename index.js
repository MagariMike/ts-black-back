var player = {
    name: "Mike",
    chips: 200
};
var cards = [];
var sum = 0;
var hasBlackjack = false;
var isAlive = false;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
var playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": £" + player.chips; // WHY IS THIS BREAKING THINGS. 
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
        hasBlackjack = true;
        console.log(message);
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
        console.log(message);
    }
    messageEl.textContent = message;
};
var newCard = function () {
    if (isAlive && !hasBlackjack) {
        var card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
};
