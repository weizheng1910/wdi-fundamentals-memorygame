//Game is able to keep track of the number of matches

var cards = [{rank: "queen",suit: "hearts",cardImage:"images/queen-of-hearts.png"},{rank: "queen",suit: "diamonds",cardImage:"images/queen-of-diamonds.png"},{rank: "king",suit: "hearts",cardImage:"images/king-of-hearts.png"},{rank: "king",suit: "diamonds",cardImage:"images/king-of-diamonds.png"}];
const cardsInPlay = [];

var count = 0;



function checkForMatch() {
	if (cardsInPlay.length == 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
  		createBoard();
  		cardsInPlay.length = 0;
		count = count + 1;
		document.getElementById('cnt').textContent="Number of match: "+count;
	} 
	else {
  		alert("Sorry, try again.");
  		createBoard();
  		cardsInPlay.length = 0;
  		count = count;
		document.getElementById('cnt').textContent="Number of match: "+count;
	}	
}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank +" of "+cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	this.setAttribute('src',cards[cardId].cardImage);
	checkForMatch();
}



function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();



	


