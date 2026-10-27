const input = require("prompt-sync")();
let repeat = true;

function isDigit(character){
	return (character >= '0' && character <= '9') || character == '-'
}


function isNumberValid(number){
	
	for (let index = 0; index < number.length; index++){
		if (!isDigit(number[index]))
			return false;
	}
	return true;
}



while (repeat){

	let number = input("Please enter a number: ");

	if (isNumberValid(number)){
		console.log(addDigits(number));
		repeat = false;

	} else {
	
		console.log("Please enter a valid number");
		console.log();

	}

}




function addDigits(number){
	let lengthOfNumber = number.length;

	if (lengthOfNumber === 1 || (lengthOfNumber == 2 && (number[0] == '-' && isDigit(number[1])))){
		return number;


	} else if(number[0] == '-'){
	
		let sumOfDigits = number[1] * -1;
		
		for (let index = 2; index < lengthOfNumber; index++){
			let digit = number[index] - '0';
			sumOfDigits += digit;
		}

		let stringSumOfDigits = String(sumOfDigits);

		return addDigits(stringSumOfDigits);
	

	} else {
		let sumOfDigits = 0;

		for (let index = 0; index < lengthOfNumber; index++){
			let digit = number[index] - '0';
			sumOfDigits += digit;
		}

		let stringSumOfDigits = String(sumOfDigits);

		return addDigits(stringSumOfDigits);


	}
}

function letterMap(number){

	let letterMap = {'A': 1,'B': 2,'C': 3,'D': 4,'E': 5,'F': 6,'G': 7,'H': 8,'I': 9,'J': 10,'K': 11,'L': 12,'M': 13,'N': 14,'O': 15,'P': 16,'Q': 17,'R': 18,'S': 19,'T': 20,'U': 21,'V': 22,'W': 23,'X': 24,'Y': 25,'Z': 26}


}





























`

	if (letterMap.'A' == )

}


