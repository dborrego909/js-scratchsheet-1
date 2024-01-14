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

// const button = document.querySelector("button");

// function greet () {
//     const namePage = prompt("Hello what is your name?");
//     const greeting = document.querySelector("#hello");
//     greeting.textContent = `Hello ${namePage}! It is very nice to meet you!`;
// }

// button1.addEventListener("click", greet);


// const button = document.querySelector("#button1");

// create function that activates when pressing the press me button
// prompt user to enter their name with message in prompt
//



const myString = '123';
const myNum = Number(myString);
console.log(myString);
console.log(myNum);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(myNum2);
console.log(myString2);
console.log(typeof myString2);

// alert(1 > 2);
// alert(2 > 1);

// const time = new Date().getHours();

// let greeting;
// if (time < 10) {
//     greeting = "Good Morning";
// } else if (time < 20) {
//     greeting = "Good Day";
// } else {
//     greeting = "Good Evening";
// }

// document.getElementById("demo").innerHTML = greeting;

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

const time = new Date().getHours();

let greeting;
if (time < 10) {
    greeting = "Good Morning";
} else if (time < 20) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

document.getElementById("demo").innerHTML = greeting;

const randomName = names[Math.floor(Math.random() * names.length)];


console.log(randomName)
// Add your code here

// Don't edit the code below here!

document.getElementById("demo2").innerHTML = ` The winner of the super mega death ray is ${randomName}!`;

// section.appendChild(para);
    
const myText = "I am a string";
const newString = myText.replace("string", "sausage");

document.getElementById("demo3").innerHTML = newString;

cars = ["Volvo", "BMW", "Pontiac", "Toyota"];

const randomCar = cars[Math.floor(Math.random() * cars.length)];

document.getElementById("demo4").innerHTML = `${randomCar} is the worst car ever made.`

const hello = "Lets get it started"

// button.document.querySelector("button2")

const chocoArray = ["I", "love", "chocolate", "frogs"];
const madeAString = chocoArray.join(" ");
document.getElementById("demo5").innerHTML = madeAString;
console.log(madeAString);

const metal = ["gold", "silver", "nickel"]
const joinMetal = metal.join(", ");
console.log(joinMetal);

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled);

const textBox = document.querySelector("#textbox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});