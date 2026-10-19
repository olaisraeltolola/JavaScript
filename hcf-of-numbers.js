const input = require("prompt-sync")();

let number = 0;

let userInput = [];
index = 0;

while (number != -1){
	number = Number(input("Please enter a number: "));
	userInput[index] = number;
	index++;

}

let cleanUserInput = [];
secondIndex = 0;

for (let arrayIndex = 0; arrayIndex < userInput.length; arrayIndex++){
	if (userInput[arrayIndex] != -1){
		cleanUserInput[secondIndex] = userInput[arrayIndex];
		secondIndex++;
	}
}

console.log(cleanUserInput);


let factor = 2;
product = 1;

while (factor <= userInput[userInput.length - 2]){
	count = 0;
	for (let element of userInput){
		if (element % factor == 0){
			count ++
			
		}
	}


	for (let arrayIndex = 0; arrayIndex < userInput.length; arrayIndex++){
		if (count == (userInput.length - 1)){
			userInput[arrayIndex] /= factor;
		}
	}
	
	if (count != (userInput.length - 1)){
		factor++;

	} else {

		product *= factor;		

	}
}

console.log(`HCF = ${product}`);
