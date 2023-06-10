class PreferentialQueue{
    constructor(){
        this.elements = [];
    }

    insert(data, priority){
        var queueElement = {
            data: '',
            priority: 0
        }
        queueElement.data = data;
        queueElement.priority = priority;
        if (this.empty()){
            this.elements.push(queueElement);
        } else {
            var added = false;
            for(var i = 0; i < this.elements.length; i++){
                if(queueElement.priority > this.elements[i].priority){
                    this.elements.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.elements.push(queueElement);
            }
        }
    }

    remove(){
        return this.elements.shift();
    }

    firstElement(){
        console.log(this.elements[0]);
    }

    lastElement(){
        console.log(this.elements[this.elements.length-1]);
    }

    print(){
        for (var i = 0; i < this.elements.length; i++){
            console.log("Position " + i + ": " + this.elements[i].data + " | priority " + this.elements[i].priority);
        }
    }

    resetQueue(){
        this.elements = [];
    }

    empty(){
        return this.elements.length == 0;
    }

}

var newPreferentialQueue = new PreferentialQueue();
newPreferentialQueue.insert("Element 01", 2);
newPreferentialQueue.insert("Element 02", 4);
newPreferentialQueue.insert("Element 03", 1);
newPreferentialQueue.insert("Element 04", 3);
newPreferentialQueue.insert("Element 05", 5);
newPreferentialQueue.print();