for (let row = 1; row <= 5; row++){
	let output = "";

	for (let column = 1; column <= row; column++){
		output += "*";

	}

	for (let column = 5; column >= row; column--){
		output += "*";

	}
	console.log(output);

}