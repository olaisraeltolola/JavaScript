function mergeArray(firstArray, secondArray){
	secondIndex = firstArray.length;
	for (let index = 0; index < secondArray.length; index++){
		firstArray[secondIndex] = secondArray[index];
		secondIndex++;
	}
	return firstArray;
}


function sortArray(array){
	for (let outerloop = 0; outerloop < array.length; outerloop++){
		for (let innerloop = outerloop + 1; innerloop < array.length; innerloop++){
			if (array[outerloop] > array[innerloop]){

				array[outerloop] = array[innerloop] + array[outerloop];
				array[innerloop] = array[outerloop] - array[innerloop];
				array[outerloop] = array[outerloop] - array[innerloop];		
			}
		}
	}
	return array;
}

let firstArray = [1,2,4];
let secondArray = [3,1,6];

console.log(sortArray(mergeArray(firstArray, secondArray)));
