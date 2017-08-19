var randNum = Math.ceil(Math.random() * 101);
var playerNum = 0;
var ruby = Math.ceil(Math.random() * 11);
var sapphire = Math.ceil(Math.random() * 11);
var amethyst = Math.ceil(Math.random() * 11);
var pearl = Math.ceil(Math.random() * 11);

$(".showRandNum").html("Random Number: " + randNum);

function checkNum(playerNum) {
	if (playerNum > randNum) {
		alert("Too high! F5 to try again.");
	} else if(playerNum == randNum) {
		alert("You win! F5 to play again.");
	}
}

$("#ruby").on("click", function(){
	playerNum += ruby;
	$(".showPlayerNum").html("Your Number: " + playerNum);
	checkNum(playerNum);
})

$("#sapphire").on("click", function(){
	playerNum += sapphire;
	$(".showPlayerNum").html("Your Number: " + playerNum);
	checkNum(playerNum);
})

$("#amethyst").on("click", function(){
	playerNum += amethyst;
	$(".showPlayerNum").html("Your Number: " + playerNum);
	checkNum(playerNum);
})

$("#pearl").on("click", function(){
	playerNum += pearl;
	$(".showPlayerNum").html("Your Number: " + playerNum);
	checkNum(playerNum);
})
