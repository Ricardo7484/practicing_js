class Polygon{
    constructor(name, height, width) {
        this.name = name;
        this.height = height;
        this.width = width;
    }

    printDataThis() {
        console.log(this.name.toUpperCase() + " | " + this.height.toFixed(2) + " | " + this.width.toFixed(2))
        console.log(this.name.toUpperCase() + " | " + this.height.toFixed(2) + " | " + this.width.toFixed(2))
    }

    printData(name, height, width) {
        console.log(name.toUpperCase() + " | " + height.toFixed(2) + " | " + width.toFixed(2))
    }
}

class Square extends Polygon {
    constructor(value){
        super(value, value);
        this.name = 'Square';
    }

    getArea(value) {
        var test = (value * value);
        console.log(test)
        return test;
    }
}
const polygon = new Polygon("Polygon", 10.123, 20.456)
polygon.printDataThis()
polygon.printData("Polygon", 20.123, 30.456)

const square = new Square(15)
//square.printData()
console.log(square.getArea(10))