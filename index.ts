let firstCard = 10; 
let secondCard = 4;
let sum = firstCard + secondCard;
let isAlive = true; 
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")!;
let cardsEl = document.getElementById("cards-el")!; 

const startGame = () => { 
	cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
}


const newCard = () => {
	console.log("Drawing a new card from the deck!")
}