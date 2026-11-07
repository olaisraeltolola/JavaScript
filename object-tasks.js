let student = {
		name: "John Doe", 
		age: 22, 
		courses: ["Math", "Physics", "Computer Science"],
		address: {city: "New York", zip: 10001}
};

// Questions One
studentName = student.name;
console.log("The student's name =",studentName);

secondCourse = student.courses[1];
console.log("The second course =",secondCourse);

zipCode = student["address"].zip;
console.log("Zip code =", zipCode);



// Question Two
student.age = 23;
console.log("Age =", student.age);

student["GPA"] = 3.8;
console.log(student);

function getDetails(){
	return student.name + " is " + student.age + " years old and has a GPA of " + student.GPA;
}

student["getDeatils"] = getDetails;
console.log(student);

console.log(getDetails());


// Questions Three
const bankAccount = {
			owner: "Alice",
			balance: 500,
			deposit: function(amount){
					this.balance += amount;
			},
			withdraw: function(amount){
				if (this.balance > amount){
					this.balance -= amount;
				}
			}
};

bankAccount.deposit(200);
console.log(bankAccount);
console.log("New balance after deposit =", bankAccount.balance);

bankAccount.withdraw(1000);
console.log(bankAccount);
console.log("New balance after withdrawal =", bankAccount.balance);


// Question Four
const inventory = {
			apple: 10,
			banana: 5,
			orange: 8,
			mango: 12
};


for (fruit of Object.entries(inventory)){
	console.log(fruit);
}

total = 0

for (quantity of Object.values(inventory)){
	total += quantity;
}
console.log("Total fruits =", total);


// Question Five
const company = {
		name: "TechCorp",
		location: "San Francisco",
		employees: [
				{id: 3422, name: "Tolola", department: "Engineering"},
				{id: 3456, name: "Chizzy", department: "HR"},
				{id: 4565, name: "Ekemini", department: "Marketing"},
				{id: 6785, name: "Naafiu", department: "Engineering"}

		]
};

secondEmployee = company["employees"][1].name;
console.log("Second employee =",secondEmployee, "\n");


for (name,location of Object.values(company)){
	console.log("Name of company =",name);
	console.log("Location of company =",location);

}

//console.log("Company name =", company.name);
//console.log("Company location =", company.location, "\n");

for (employeeDetails of company.employees){
	console.log("Employee name =", employeeDetails.name, "\nDepartment =", employeeDetails.department, "\n");
}


// Question Six
const products = [
	{id: 1, name: "Laptop", price: 1200},
	{id: 2, name: "Phone", price: 800},
	{id: 3, name: "Tablet", price: 500},
	{id: 4, name: "Desktop", price: 700},
];

function findExpensiveProducts(products, threshold){
	newArray = [];

	for (items of products){
		if (items.price > threshold){
			newArray.push(items);
		}
	}
	return newArray;
}

console.log(findExpensiveProducts(products, 700));


