class Queue{
    constructor(){
        this.elements = [];
    }

    insert(data){
        this.elements.push(data);   //Insert data in the end of array
    }

    remove(){
        return this.elements.shift();   //remove the last element of array
    }

    firstElement(){
        console.log(this.elements[0]);
    }

    lastElement(){
        console.log(this.elements[this.elements.length-1]);
    }

    print(){
        console.log("Start | <- " + this.elements.toString() + " <- | End");
    }

    resetQueue(){
        this.elements = [];
    }

    empty(){
        return this.elements.length == 0
    }
}

var newQueue = new Queue();
newQueue.insert(10);
newQueue.insert(20);
newQueue.insert(30);
newQueue.insert(40);
newQueue.insert(50);
newQueue.print();
console.log(newQueue.empty());
newQueue.firstElement();
newQueue.lastElement();
newQueue.remove();
newQueue.print();
newQueue.insert(60);
newQueue.print();