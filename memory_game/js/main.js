console.log("up and running!")	




const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
cardsInPlay.push(cardTwo);





console.log(cardsInPlay);
console.log("User flipped "+ cardTwo)

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) { 
		alert("you found a match!")
	}	

	else {
		alert("sorry,try again.")
	}


}

else {
	alert("please pick two cards.")

}


