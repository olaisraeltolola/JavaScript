function printSpace(row){
let space = "#";

for (let counter = 1; counter <= row; counter++){
	output += space;
}
return output;
}


let magicNumber = 0;
	
let columnTwo = 0;


for (let row = 1; row <= 5; row++){
	output = "";
	let columnOne = 0;
	for (columnOne = 1; columnOne <= row; columnOne++){
		output += "*";
	}

	printSpace(7-columnOne);

	for (columnTwo = 5; columnTwo >= row; columnTwo--){
		output += "*";

	}

	printSpace(columnTwo +  ++magicNumber);


	for (columnThree = 5; columnThree >= row; columnThree--){
		output += "*";

	}

console.log(output);

}
