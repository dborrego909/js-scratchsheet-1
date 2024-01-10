const name = "John";
let admin = name;
// alert( admin );
console.log("Hello World!");

const homePlanet = "Earth";

let currentVisitor = "John";

console.log(23 + 97);

console.log(4 + 9 + 7 + 3 + 4 + 9);

let a = 10;

console.log(a)

console.log(9 * a);

let b = 7 * a

console.log(b);

const MAX = 57;

let actual = MAX - 13;

let percentage = actual / MAX;

console.log(percentage);

const string = "The revolution will not be televised";

console.log(string);

const button = document.querySelector("button");

function greet () {
    const namePage = prompt("Hello what is your name?");
    const greeting = document.querySelector("#hello");
    greeting.textContent = `Hello ${namePage}! It is very nice to meet you!`;
}

button.addEventListener("click", greet);