const prompt = require("prompt-sync")();
repeat = true;

while (repeat){
	let input = Number(prompt("Please enter the number of rows (1 - 20): "));

	if ((input > 20 || input < 1) || Number.isNaN(input)){
		console.log("Please enter a valid input");

	}
	else {

		for (let row = 1; row <= input; row++){
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
		repeat = false;
	}
}