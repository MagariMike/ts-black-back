let player = { 
	name: "Mike",
	chips: 200
};
let cards: number[] = []!;
let sum = 0;
let hasBlackjack = false;
let isAlive = false; 
let message = "";
let messageEl = document.getElementById("message-el")!;
let sumEl = document.getElementById("sum-el")!;
let cardsEl = document.getElementById("cards-el")!; 
let playerEl = document.getElementById("player-el")!;

playerEl.textContent = player.name + ": £" + player.chips; // WHY IS THIS BREAKING THINGS. 

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
		hasBlackjack = true;
		console.log(message)
	} else {
		message = "You're out of the game!";
		isAlive = false;
		console.log(message)
		
	}
	messageEl.textContent = message;
}


const newCard = () => {
	if(isAlive && !hasBlackjack) {
		
		let card = getRandomCard();
		sum += card;
		cards.push(card)
		renderGame()
	}
	
}