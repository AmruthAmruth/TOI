

class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return
        }
        return this.items.shift()
    }

    front(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return
        }
        return this.items[this.items[0]]
    }

    isEmpty(){
       return this.items.length===0 ? false : true
    }
}