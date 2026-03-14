



class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null
    }


    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head=this.tail=newNode;
            return
        }

        this.tail.next=newNode;
        newNode.prev=this.tail
        this.tail=newNode
    }

    display(){
        if(!this.head){
            console.log("List is empty");
            return
        }

        let current = this.head;
        let result ="";
        while(current){
            result += current.value + " - ";
            current=current.next
        }

        console.log(result);
        

    }




    pattern(){
        let fast=this.head;
        let slow= this.head;

        while(fast.next && fast.next.next){
            fast=fast.next.next;
            slow= slow.next
        }

        let left = slow;
        let right = slow;



        while(left){
            let temp = left;
            let line = "";
            while(temp !== right.next){
                line += temp.value;
                temp=temp.next
            }

            console.log(line);
            left=left.prev;
            right=right.next
            
        }




    }



}



const list = new LinkedList();


list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
list.pattern()
list.display()