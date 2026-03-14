


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
            return
        }
        let current = this.head;
        while(current.next){
            current=current.next
        }
        current.next=newNode;
        this.tail=newNode;
    }

    display(){
        if(!this.head){
            console.log("List is empty");
            return
        }
        let result=""
        let current = this.head;
        while(current){
            result+= current.value + "-->"
            current=current.next
        }
        console.log(result);
        
    }



    swapFirstAndLast(){
        if(!this.head){
            console.log("list is empty");
            return
        }
        [this.head.value,this.tail.value]=[this.tail.value,this.head.value]

    }


    swapMiddleTwoElem(){
        if(!this.head){
            console.log("List is empty");
            return
        }

        let length=0;
        let current = this.head;
        while(current){
            length++;
            current=current.next
        }
        if(length%2 !== 0){
            console.log("List contain odd length so can not swap");
            return
        }


        let midIndex=Math.floor(length/2);
   

        let prev=null;
        current=this.head;
        length=0;
        while(current){
            if(length===midIndex){
                [prev.value,current.value]=[current.value,prev.value]
                return
            }
            length++;
            prev=current;
            current=current.next
        }
        
       
    }




    sumOfFiveElem(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let length=0
        let current = this.head;

        while(current){
            length++;
            current=current.next
        }

        let startIndex = Math.floor((length-2)/2)
        let endIndex=startIndex+2
        let sum=0
        current=this.head;
        length=0
        while(current){
            
            if(length>=startIndex && length< endIndex){
                sum+=current.value;
            }

            if(startIndex>= endIndex) break;
            current=current.next;
            length++
            

        }
        console.log(sum);
        
    }





    findMiddle(){
        if(!this.head){
            console.log("List is empty");
            return;
        }

        let fast=this.head;
        let slow=this.head;
        while(fast.next && fast.next.next){
            fast=fast.next.next;
            slow=slow.next
        }
        console.log(slow.value);
        
    }



    removeDuplicate(){
        if(this.head){
            console.log("list is empty");
            return
        }

        let current = this.head;
        let prev=null;
        let set = new Set()
        while(current){
                    if(set.has(current.value)){
                        prev.next=current.next
                    }else{
                        set.add(current.value)
                        prev=current
                    }
                    current = current.next
        }
    }



}









const list  = new LinkedList();

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
//list.swapFirstAndLast()
// list.swapMiddleTwoElem()
// list.sumOfFiveElem()
list.findMiddle()
list.display()