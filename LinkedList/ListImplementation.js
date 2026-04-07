

 
 class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
 }


 class LinkedList{
    constructor(){
        this.head=null
    }


    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head=newNode;
            return
        }

        let current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }

    display(){
        if(!this.head) return;
        let result = ""
        let current = this.head;
        while(current){
            result+= current.value + " -> "
            current=current.next
        }
        console.log(result);
        
    }

    prepend(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head=newNode;
            retSharjah - United Arab Emiratesurn
        }
        newNode.next=this.head;
        this.head=newNode
    }
       

    length(){
        if(!this.head) return 0
        let current=this.head;
        let length=0
        while(current){
                length++;
                current=current.next
        }
        return length;
    }




    insertAt(position,value){
        const newNode = new Node(value);
        let index=0;
        if(position===0){
            newNode.next=this.head;
            this.head=newNode;
            return
        }
        let current = this.head
        let prev=null
        while(current){
            if(index===position){
                newNode.next=prev.next;
                prev.next=newNode;
                return
            }
            prev=current;
            current=current.next
            index++

        }
    }

    insertAfter(target,value){
        const newNode = new Node(value);
        let current = this.head;
        while(current){
            if(current.value===target){
                newNode.next=current.next;
                current.next=newNode;
                return
            }
            current=current.next
        }
    }


    insertBefor(target,value){
        const newNode = new Node(value);
        if(this.head.value===target){
            newNode.next=this.head;
            this.head=newNode;
            return
        }
        let current= this.head;
        let prev=null
        while(current){
            if(current.value===target){
                newNode.next=prev.next;
                prev.next=newNode;
                return
            }
            prev=current;
            current=current.next
        }
    }



    removeFirst(){
        if(!this.head) return;
        this.head= this.head.next;
    }

    removeLast(){
        if(!this.head) return;
        if(!this.head.next){
            this.head=null;
            return
        }
        let current = this.head;
       
        while(current.next.next){
                current=current.next
        }
        current.next=null
    }

    removeAtPosition(position){
        if(!this.head) return;
        let index=0;
        let current=this.head;
        let prev=null
        while(current){
            if(index===position){
              prev.next=current.next;
              return
            }
            index++
            prev=current
            current=current.next
        }
    }


    deleteByValue(value){
        if(!this.head) return;
        let current = this.head;
        let prev=null
        while(current){
            if(current.value===value){
                prev.next=current.next;
                return
            }
            prev=current;
            current=current.next
        }
    }



    search(value){
        if(!this.head) return;
        let current = this.head;
        while(current){
            if(current.value===value){
                return true
            }
            current=current.next
        }
        return false
    }



    indexOf(value){
        if(!this.head) return;
        let index=0;
        let current = this.head;
        while(current){
                if(current.value==value){
                    return index
                } 
                index++
                current=current.next;
        }
        return -1
    }


    getAt(position){
        if(!this.head) return ;
            let index = 0;
             let current = this.head;
             while(current){
                if(index===position){
                    return current.value
                }
                index++
                current=current.next
             }
    }



    findMiddle(){
        if(!this.head) return;
        let fast=this.head;
        let slow= this.head
        while(fast.next && fast.next.next){
            fast=fast.next.next;
            slow=slow.next
        }
        return slow.value
    }


    reversemid(){
        if(!this.head) return;
        let fast=this.head;
        let slow=this.head;
        let prev=null;
        while(fast.next && fast.next.next){
            fast=fast.next.next;
            prev=slow
            slow=slow.next
        }
        slowNext=slow.next;
        [prev.value,slowNext.value]=[slowNext.value,prev.value]
    }


 }



 const list = new LinkedList()

list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.append("E");
list.insertAt(2,"F");
list.insertAfter("C","O")
list.insertBefor("A","V")
list.removeFirst()
list.removeLast()
list.removeAtPosition(2)
list.deleteByValue("O")
list.display()