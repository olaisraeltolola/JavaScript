function area (w, h){
	return(w * h);

}

const total = area(4,5) + area(2,3)
console.log(total);


function addPrint(a, b) {console.log(a + b); }
function add(a, b) {return a + b}
const x = addPrint(2, 3)
const y = add(2, 3)
console.log(x, y)



function min(a, b){
	let minimum = a
	if (b < minimum){
		minimum = b
	}
	return minimum
}

console.log(min(0, -10))


function isEven(n){
	return (n % 2 == 0)
}

console.log(isEven(75))



function areaOfRectangle (width, height){
	return(width* height);

}

console.log(areaOfRectangle(4,5));



function greet(name = "friend"){
	console.log("Hello, " + name + "!");

}
name = "Tolola";
greet(name);
greet("Ada");


function sum(...numbers){
	let total = 0
	for (const n of numbers){
		total += n;
	}
	return total;
}
console.log(sum(1,2,3,4,5))


const double = x => x * 2;
console.log(double(4))


















