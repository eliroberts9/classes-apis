/*
Objects, Interfaces, and APIs
 */

//Object example
let dog = {
	name: "Steve",
	color: "brown",
	breed: "Pug",
	size: "Small",
	//'bark' serves to name the function in this case
	//The 'bark' function is an example of an API
	bark: function(typeOfBark) {
		console.log("Bark!");
	},
};

dog.bark();
console.log(dog.name);

//Passing by value/reference
//Anything done to an object inside of a function is passed on to the original object, the object is not copied
function x(y) {
	y.num = y.num + 5;
	console.log(y); //10
}

let y = {
	name: "Tom",
	num: 10,
};

x(y);
console.log(y);