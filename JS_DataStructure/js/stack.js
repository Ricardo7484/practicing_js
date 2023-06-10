class Stack{
    constructor(){
        this.elements = [];
    }

    push(data){
        this.elements.unshift(data);
    }

    pop(){
        return this.elements.shift();
    }

    printStack(){
        if (!this.empty()){
            console.log("TOP | " + this.elements.toString() + " | DOWN");
        } else{
            console.log("Empty Stack!");
        }
    }

    top(){
        if (!this.empty()){
            return this.elements[0];
        } else{
            console.log("Empty Stack!");
        }
    }

    empty(){
        return this.elements.length == 0;    //If equal 0, return is true
    }
}

var newStack = new Stack;
newStack.printStack();
newStack.push(10);
newStack.printStack();
newStack.pop();
newStack.printStack();
newStack.push(20);
newStack.push(30);
newStack.push(40);
newStack.printStack();

console.log(newStack.top());
newStack.printStack();

//console.log(newStack.empty());