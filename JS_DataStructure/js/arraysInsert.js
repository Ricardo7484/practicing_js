var myArray = ["Array of people", "Hello World!", "Son"];

myArray.push(350);          //Insert elements at the end of the array
myArray.push("Ricardo");    //Insert elements at the end of the array

console.log("Push: ");
console.log(myArray);
//console.log(myArrayV1);

myArray.unshift("Segundo");     //Insert elements at the beginning of the array
myArray.unshift("Primeiro");    //Insert elements at the beginning of the array

console.log("Unshift: ");
console.log(myArray);

//Insert elements between other array elements, without erasing old elements
myArray.splice(2, 0, "newElement1", "newElement2", "newElement3");
console.log("Splice without erasing: ");
console.log(myArray);

//Insert elements between other array elements, erasing old elements
myArray.splice(3, 1, "newElement4", "newElement5", "newElement6");
console.log("Splice erasing elements: ");
console.log(myArray);

var arrayNumbersOdd = [1, 3, 5, 7, 9]
var arrayNumbersEven = [2, 4, 6, 8]

//Attention: result of a concatenation of arrays, it is only noticed in a new array.
var arrayNumbers = arrayNumbersOdd.concat(arrayNumbersEven)

console.log(arrayNumbers)