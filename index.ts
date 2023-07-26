let cards: number[] = []!;
let sum = 0;
let isAlive = false; 
let message = "";
let messageEl = document.getElementById("message-el")!;
let sumEl = document.getElementById("sum-el")!;
let cardsEl = document.getElementById("cards-el")!; 


function getRandomCard() { 
	let randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber > 10) { 
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return randomNumber
	}
}




const startGame = () => { 
	isAlive = true
	let firstCard = getRandomCard(); 
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame()
}



const renderGame = () => { 
	cardsEl.textContent = "Cards: "

	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "
	}
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
	messageEl.textContent = message;
}


const newCard = () => {
	let card = getRandomCard();
	sum += card;
	cards.push(card)
	renderGame()
}