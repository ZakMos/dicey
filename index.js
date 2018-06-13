let diceFaces = [
	"/images/inverted-dice-1.svg",
	"/images/inverted-dice-2.svg",
	"/images/inverted-dice-3.svg",
	"/images/inverted-dice-4.svg",
	"/images/inverted-dice-5.svg",
	"/images/inverted-dice-6.svg"
];


let rollDice = document.querySelector(".dice");
let rollDice1 = document.querySelector(".dice1");

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollThatDice() {
	rollDice.setAttribute("src", diceFaces[getRandomInt(0, 5)]),
	rollDice1.setAttribute("src", diceFaces[getRandomInt(0, 5)]) ;
}
document.addEventListener("click", function(event) {
	event.preventDefault();
	rollThatDice();
});
