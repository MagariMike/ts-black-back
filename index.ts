let firstCard = 10; 
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = true; 
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")!;
let cardsEl = document.getElementById("cards-el")!; 

const renderGame = () => { 
	cardsEl.textContent = `Cards: ${cards[0]} + ${cards[1]}`;
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
		console.log(message)
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		console.log(message)
	} else {
		message = "You're out of the game!";
		console.log(message)
		isAlive = false;
	}
}


const newCard = () => {
	let card = 7;
	sum += card; 
	renderGame()
}