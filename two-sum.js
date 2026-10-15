const TARGET = 9;

let numbers = [3,7,6,5];

for (let outerCounter = 0; outerCounter <= numbers.length; outerCounter++){

	for (let innerCounter = outerCounter + 1; innerCounter <= numbers.length; innerCounter++){
		if (numbers[outerCounter] + numbers[innerCounter] == TARGET){
			console.log(`[${outerCounter},${innerCounter}]`);
		}
	}
	
}
