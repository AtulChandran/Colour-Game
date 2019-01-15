var numberOfSquares=6;
var squaresClicked=numberOfSquares;
var score;

var colours=generateRandomColours(numberOfSquares);


var colourDisplay=document.getElementById("colourDisplay");
var squares=document.querySelectorAll(".square")
var messageDisplay=document.getElementById("message")
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.getElementById("easyBtn");
var hard=document.getElementById("hardBtn");
var finalScore=document.getElementById("score");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numberOfSquares=3;
	squaresClicked=numberOfSquares;

	colours=generateRandomColours(numberOfSquares);
	pickedColour=pickColour();
	colourDisplay.textContent=pickedColour;

	for(var i=0;i<squares.length;i++){
		if(colours[i]){
			squares[i].style.backgroundColor=colours[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	messageDisplay.textContent="";
	finalScore.textContent=" 0 ";
	h1.style.backgroundColor="steelblue";

})

hard.addEventListener("click",function(){
	easy.classList.toggle("selected");
	hard.classList.toggle("selected");
	numberOfSquares=6;
	squaresClicked=numberOfSquares;

	colours=generateRandomColours(numberOfSquares);
	pickedColour=pickColour();
	colourDisplay.textContent=pickedColour;

	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colours[i];
			squares[i].style.display="block";
	}
	messageDisplay.textContent="";
	finalScore.textContent=" 0 ";
	h1.style.backgroundColor="steelblue";

})

var pickedColour=pickColour();
colourDisplay.textContent=pickedColour;

reset.addEventListener("click",function(){
	reset.textContent="New Colours";
	colours=generateRandomColours(numberOfSquares);
	squaresClicked=numberOfSquares;

	pickedColour=pickColour();
	colourDisplay.textContent=pickedColour;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colours[i]
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	finalScore.textContent=" 0 ";
})





for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colours[i];
	squares[i].addEventListener("click",function(){
	var sq=squaresClicked;
		//grabbing the colour
		var clickedColour=this.style.backgroundColor;
		if(clickedColour==pickedColour){
			messageDisplay.textContent="Correct" ;
			finalScore.textContent=scoreCalculate(sq)
			setColour();
			h1.style.backgroundColor=pickedColour;
			reset.textContent="Play Again?";
		}
		else{
			this.style.backgroundColor="#232323";
			finalScore.textContent=scoreCalculate(sq)

			messageDisplay.textContent="Try Again";
			// squares[i].disabled=true;
			squaresClicked--;
		}
	})
}
function scoreCalculate(squaresClicked){
	var score=600-(600/squaresClicked);
	return score;
}


function setColour(){
	for(var i=0;i<squares.length;i++)
	squares[i].style.backgroundColor=pickedColour
}

function pickColour(){
	var random=Math.floor(Math.random() * colours.length);
	return colours[random]
}

function generateRandomColours(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	//Picking a red colour
	var r=Math.floor(Math.random()*256);
	//Picking a green colour
	var g=Math.floor(Math.random()*256);
	//Picking a blue colour
	var b=Math.floor(Math.random()*256);

	return "rgb("+ r + ", " + g + ", " + b + ")";
}