for (let row = 1; row <= 8; row++){
	let output = "";
	if (row % 2 != 0){
		for (let column = 1; column <= 4; column++){
			output += " #";
		}
		console.log(output);
	}
	else {
	for (let column = 1; column <= 4; column++){
		output += "# ";
	}
	console.log(output);
	}
}
