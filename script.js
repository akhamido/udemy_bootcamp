//alert("Hello from Js file!");
//alert("hello " + prompt("what is your name?"));

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");

console.log("Your full name is " + firstName + " " + lastName);
console.log("Your full name is %s %s", firstName, lastName);
console.log("You are %i years old", age);

alert(age + " years is roughly " + age*365 + " days");
