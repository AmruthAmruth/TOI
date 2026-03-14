


class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}


class Queue{
    constructor(){
        this.front=null;
        this.rear=null
    }



    enqueue(value){
        const newNode = new Node(value);
        if(!this.rear){
            this.front=this.rear=newNode;
            return
        }
        this.rear.next=newNode;
        this.rear=newNode
    }

    dequeue(){
        if(!this.rear) return;
        let val = this.front.value;
        this.front=this.front.next;
        if(!this.front) this.rear = null
        return val

    }

    display(){
        if(!this.rear) return;
        let result = ""
        let current = this.front;
        while(current){
            result+= current.value+" -> "
            current=current.next
        }
        return result
    }


}


const list = new Queue()

list.enqueue("A")
list.enqueue("B")
list.enqueue("C")
list.enqueue("D")
console.log(list.dequeue());
console.log(list.display());
