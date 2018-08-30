var num = 4;

var guessed_num = Number(prompt("guess a num"));

if(guessed_num > num)
    alert("too high");
else if(guessed_num < num)
    alert("too low");
else {
    alert("guessed right");
}
