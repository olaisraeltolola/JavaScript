function convertKilometresToMiles (distance){
	return distance * 1.6;

}


function convertMinutesToSeconds(time){
	return time * 60;

}

function convertSecondsToHours(time){
	return time / 3600;

}


const PI = 3.142;

function getPerimeterOfCircle(radius){
	let perimeter = 2 * radius * PI;
	return perimeter;

}

function getAreaOfCircle(radius){
	let area = radius * radius * PI;
	return area;

}

function getPerimeterOfRectangle(width, height){
	let perimeter = 2 * (width + height);
	return perimeter;

}

function getAreaOfRectangle(width, height){
	let area = width * height);
	return area;

}
