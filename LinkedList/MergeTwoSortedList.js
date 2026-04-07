



class Node{
    constructor(value){
        this.value=value;
        this.next=null
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
            return;
        }
        let current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
        this.tail=newNode
    }


    display(){
        if(!this.head){
            console.log("list is empty");
            return
        }
        let result="";
        let current = this.head;
        while(current){
            result+=current.value + "->"
            current=current.next
        }
        console.log(result+"null");
        
    }
}



function mergeTwoSortedList(l1,l2){
    const dummy = new Node(0);
    let tail= dummy;
    while(l1 && l2){
        if(l1.value <= l2.value){
            tail.next=l1;
            l1=l1.next
        }else{
            tail.next=l2;
            l2=l2.next
        }
      tail=tail.next
    } 

    if(l1) tail.next=l1;
    if(l2) tail.next=l2

    return dummy.next
}




const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
console.log("List 1:");
list1.display();

const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);
console.log("List 2:");
list2.display();

const mergedList = mergeTwoSortedList(list1.head,list2.head)


let current = mergedList;
let result  = "";

while(current){
    result+=current.value;
    current=current.next;
}

console.log(result);
