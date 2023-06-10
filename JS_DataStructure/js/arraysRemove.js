var array = ["one", "two", 3, 4, "cinq", "six", "Sept", "huit"]

console.log(array)          //Array(8) [ "one", "two", 3, 4, "cinq", "six", "Sept", "huit" ]
console.log(array[2])       //3

console.log(array.pop())    //huit - return of element removed - last of array
console.log(array)          //Array(7) [ "one", "two", 3, 4, "cinq", "six", "Sept" ]

console.log(array.shift())  //one - return of element removed - first of array
console.log(array)          //Array(6) [ "two", 3, 4, "cinq", "six", "Sept" ]

console.log(array.splice(2,3, "newElement"))    //Array(3) [ 4, "cinq", "six" ]
console.log(array)          //Array(4) [ "two", 3, "newElement", "Sept" ]