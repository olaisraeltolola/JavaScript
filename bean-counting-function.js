function countBs (word){
	count = 0;
	for (let index = 0; index < word.length; index++){
		if (word[index] == 'B'){
			count++;
		}
	}
	return count;
}


console.log(countBs("BattlemrBhalenBfjbduu"))







function countChar (word,letter){
	count = 0;
	for (let index = 0; index < word.length; index++){
		if (word[index] == letter){
			count++;
		}
	}
	return count;
}


console.log(countChar("BattlemrBhuuuuuubduu",'u'))