var body = document.querySelector("body");
var btn = document.querySelector("button");

var isRed = false;

// version 1
// btn.addEventListener("click", function(){
//
//     if(isRed)
//         body.style.backgroundColor = "white";
//     else
//         body.style.backgroundColor = "red";
//     isRed = !isRed;
//
// })

// version 2
btn.addEventListener("click", function(){
    document.body.classList.toggle("red");
})
