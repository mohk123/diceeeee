var randomNumber1=Math.floor(Math.random()*6)+1; 
var randomDiceImage="dice" + randomNumber1 + ".png"; //dice 1 
var randomImagesrc="images/"+ randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImagesrc2="images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesrc2);

//if player 1 wins
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML="Player 1 Wins!";
}
//player 2 wins
else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML="Player 2 Wins!";
}
//no one
else{
	document.querySelector("h1").innerHTML="DRAW!!";
}