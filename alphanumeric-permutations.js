function permutationsOf(word){
	let permutationArray = [];
	let combinedPermutations = [];

	permutationArray.push(word);

	for (let index = 0; index < word.length; index++){
		let firstCapital = word[index].toUpperCase();


		let firstHalfRemainingLetters = word.slice(0,index);

		let secondHalfRemainingLetters = word.slice(index + 1, word.length);
		
		combinedPermutations = permutationsOf(secondHalfRemainingLetters);

		for (permutations of combinedPermutations){

			newWord = firstHalfRemainingLetters + firstCapital + permutations;

			permutationArray.push(newWord);

			//otherWord = firstHalfRemainingLetters + otherCapitals + secondHalfRemainingLetters;
			//console.log("Other words = " + otherWord);
		}

	}


	return permutationArray;
}

console.log(permutationsOf("poop"));