class Person {
    constructor(name, age, height) {
        this.name = name
        this.age = age
        this.height = height
    }

    sayHello(){
        console.log(`Hello ${this.name}!`)  
    }
}

let aPerson = new Person('Ricardo', 38, 1.75);
console.log(aPerson.name)
console.log(aPerson.age)
console.log(aPerson.height)

aPerson.name = 'RicardoT'

console.log(aPerson.name)

aPerson.sayHello()