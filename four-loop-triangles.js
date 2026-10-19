function printSpace(row){
let space = " ";

for (let counter = 1; counter <= row; counter++){
	output += space;
}
return output;
}


let magicNumber = 1;
let columnTwo = 0;


for (let row = 1; row <= 5; row++){
	output = "";

	for (let columnOne = 1; columnOne <= row; columnOne++){
		output += "*";
	}

	printSpace(7 - row);

	for (columnTwo = 5; columnTwo >= row; columnTwo--){
		output += "*";

	}

	printSpace(columnTwo +  ++magicNumber);


	for (let columnThree = 5; columnThree >= row; columnThree--){
		output += "*";

	}

	printSpace (7 - row);

	for (let columnFour = 1; columnFour <= row; columnFour++){
		output += "*";
	}

console.log(output);

}
