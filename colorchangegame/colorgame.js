var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var playAgainBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var hBackground = document.querySelector("h1");
var mode = 6;

var colors = generateRandColors(6);
var randColor = colors[getRandomInt(0, squares.length)];

colorDisplay.textContent = randColor;

resetBtn.addEventListener("click", reset);

easyBtn.addEventListener("click", function(){
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
    mode = 3;
    reset();
    for(var i=3; i<6; i++)
    {
        squares[i].style.display = "none";
    }
})
hardBtn.addEventListener("click", function(){
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
    for(var i=3; i<6; i++)
    {
        squares[i].style.display = "block";
    }
    mode = 6;
    reset();
})
for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var pickedColor = this.style.backgroundColor;
        if(pickedColor === randColor)
        {
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
            resetBtn.textContent = "Play Again?";
            hBackground.style.backgroundColor = pickedColor;
        }
        else
        {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    })
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function changeColors (pickedColor){
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function generateRandColors(num) {
    var colors = [];
    for(var i = 0; i < num; i++)
    {
        colors[i] = "rgb(" + getRandomInt(0,255) + ", " + getRandomInt(0,255)+ ", " + getRandomInt(0,255)+")";
    }
    return colors;
}

function reset(){
    resetBtn.textContent = "New Color"
    colors = generateRandColors(mode);
    randColor = colors[getRandomInt(0, mode)];
    colorDisplay.textContent = randColor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    hBackground.style.backgroundColor = "steelblue";
    messageDisplay.textContent ="";

}
