var score1 = 0;
var score2 = 0;
var limit = 5;


var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var displayLimit = document.querySelector("p span");
var input = document.querySelector("input");
var resetBtn = document.querySelector("#reset");

input.addEventListener("change", function(){
    reset();
    displayLimit.textContent = input.value;
    limit = input.value;
})


btn1.addEventListener("click", function(){
    if(limit != 0)
    {
        p1.textContent = ++score1;
        limit--;
        checkEndGame();
    }

})

btn2.addEventListener("click", function(){
    if(limit != 0)
    {
        p2.textContent = ++score2;
        limit--;
        checkEndGame();
    }
})

resetBtn.addEventListener("click", reset);

function checkEndGame () {
    if(limit == 0)
    {
        if(score1 > score2)
            p1.classList.add("winner");
        else
            p2.classList.add("winner");
    }
}

function reset (){
    score1 = 0;
    score2 = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove("winner");
    p2.classList.remove("winner");
    limit = 5;
}
