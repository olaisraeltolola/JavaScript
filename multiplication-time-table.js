const prompt = require("prompt-sync")();
let repeat = true;

while(repeat){
	let number = Number(prompt("Tables of: ")); 

	if (Number.isNaN(number)){
		console.log ("Please enter a valid number");
	}

	else { 
		for (let index = 1; index <= 12; index++){
			let result = number * index;
			console.log(`${number} x ${index} = ${result}`);
			repeat = false;

		}
	}
}