console.log("up and running!")	

const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) { 
		alert("you found a match!")
	}	
	else {
		alert("sorry,try again.")
	}
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} 
	else {
  		console.log("Sorry, try again.");
	}	
}

var flipCard = function(cardId) {
	let chosenCard = cards[cardId];
	console.log("User flipped " + chosenCard);
	cardsInPlay.push(chosenCard);
	checkForMatch();
}



flipCard(0);
flipCard(2);
