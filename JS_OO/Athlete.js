class Athlete{
    constructor(name) {
    //constructor(name, weight, height) {
        this.name = name;
        //this.weight = weight;
        //this.height = height;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    getImc(weight, height) {
        return weight / (height * height)
    }

    getPrintUpperName(value){
        return value.toUpperCase();
    }

    static formatImcResult(imc) {
        return imc.toFixed(2);
    }
}

const athlete = new Athlete();
athlete.name = "Teste";
athlete.weight = 75;
athlete.height = 1.75;

console.log(athlete);
console.log(athlete.name, athlete.weight, athlete.height)
console.log(`${athlete.name} has ${Athlete.formatImcResult(athlete.getImc(athlete.weight, athlete.height))}`)


console.log(athlete.getPrintUpperName("Hello"))