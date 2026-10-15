function minimum(numberOne, numberTwo){
	let smallest = numberOne;

	if (numberTwo < smallest){
		smallest = numberTwo;
	}
	return smallest;
}

console.log(minimum(100,29))