//const q = ["Tolola", "Chizzy", "Ekemini",4];
/* q.push("Zainab", "Mr Majek");
console.log(q)

q.shift();
console.log(q);

console.log(q.pop())
console.log(q)


console.log()
console.log(q) */

/*const names = ["Tolola", "Chizzy", "Ekemini","Tuple"];

console.log(names.slice(0,2));
console.log(names.slice(-1,4));
console.log(names.concat("Mr Chibuzo"));
console.log(names)
*/

/*const a = ["Ada", "Tunde"]
const copy = [...a]
copy.push("Femi");
console.log(a);
console.log(copy);
const same = a;
console.log(same == a)
console.log(copy == a)
*/


function range(start, stop){
	index = 0;
	array = []
	for (let count = start; count <= stop; count++){
		array[index] = count;
		index++;
	}
	return array;
}

console.log(range(1,5))


function sum(numbers){
	let total = 0;

	for (let number of numbers) total += number;
	return total;
}

console.log(sum(range(1,10)))


function reverseArray(array){
	let newArray = []
	for (let element of array){
		newArray.unshift(element);
	}
	return newArray;

}


console.log(reverseArray([1,2,3,54,6]));


function reverseArrayInPlace(array){
	let index = 0;
	let temporary = 0;
	
	for (let secondIndex = array.length - 1; secondIndex >= Math.floor(array.length / 2); secondIndex--){
		temporary = array[secondIndex];
		array[secondIndex] = array[index];
		array[index] = temporary;

		index++;
	}
	
	return array;
}
console.log(Math.floor(7/2))
console.log(reverseArrayInPlace([3,4,5,6,7,8,10,45]))






