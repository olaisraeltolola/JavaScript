const input = require("prompt-sync")({sigint: true});

let name = input("What is your name? ");

let age = input("How old are you? ");

let complexion = input("What is your complexion? ");

let school = input("What school do you attend? ");

let hobby = input("What are your hobbies? ");

console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`I am ${complexion} in complexion`);
console.log(`I attend ${school}`);
console.log(`My hobbies are ${hobby}`);
console.log();


if (age >= 12){
	console.log("You are an adult, gurliepop")

} else {

	console.log("Grow up, child!")
}

