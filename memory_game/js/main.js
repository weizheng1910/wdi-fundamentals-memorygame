console.log("up and running!")	

var cards = [{rank: "queen",suit: "hearts",cardImage:"images/queen-of-hearts.png"},{rank: "queen",suit: "diamonds",cardImage:"images/queen-of-diamonds.png"},{rank: "king",suit: "hearts",cardImage:"images/king-of-hearts.png"},{rank: "king",suit: "diamonds",cardImage:"images/king-of-diamonds.png"}];
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
	console.log("User flipped " + chosenCard.rank +" of "+chosenCard.suit);
	cardsInPlay.push(chosenCard.rank);
	console.log(chosenCard.cardImage)
	checkForMatch();
}



flipCard(0);
flipCard(2);
