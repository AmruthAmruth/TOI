

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}



class BinarySearchTree{
    constructor(){
        this.root=null
    }


    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root=newNode;
            return;
        }
        let current = this.root;
        while(current){
            if(value<current.value){
                if(!current.left){
                    current.left=newNode;
                    return
                }
                current=current.left
            }else if(value>current.value){
                if(!current.right){
                    current.right=newNode;
                    return
                }
                current=current.right
            }
        }

    }


    inOrder(node=this.root){
                if(!node) return;
                this.inOrder(node.left);
                console.log(node.value);
                this.inOrder(node.right)         
    }

    preOrder(node=this.root){
        if(!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right)
        
    }


    postOrder(node=this.root){
        if(!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
        
    }


    isValidBST(root=this.root,min=-Infinity,max=Infinity){
        if(!root) return true;
        if(root.value<=min || root.value>=max) return false;
        return (this.isValidBST(root.left,min,root.value) && this.isValidBST(root.right,root.value,max))
    }

    search(value){
        let current = this.root;
        while(current){
            if(current.value===value) return true;
            if(value<current.value){
                current=current.left;
            }else{
                current=current.right
            }
        }
        return false
    }

    kthSmallest(k){
        let result=null;
        let count=0;
        function inOrderTravels(node){
            if(!node || result!==null) return;

            inOrderTravels(node.left);
            count++
            if(count===k){
                result=node.value;
                return
            }
            inOrderTravels(node.right)

        }
        inOrderTravels(this.root);
        return result;
    }


    kthLargest(k){
        let result=null;
        let count=0;
        function postOrderTravels(node){
            if(!node || result !==null) return;
            postOrderTravels(node.left);
            postOrderTravels(node.right);
            count++;
            if(count===k){
                result=node.value;
                return
            }
        }
        postOrderTravels(this.root);
        return result
    }



    findMin(node=this.root){
          let current=node;
          while(current.left){
            current=current.left
          }
          return current.value
    }
   
    findMax(node=this.root){
        let current = node;
        while(current.right){
            current=current.right
        }
        return current.value
    }

    findHeight(root=this.root){
        if(!root) return -1;
        let leftHeight= this.findHeight(root.left);
        let rightHeight = this.findHeight(root.right);
        return 1 + Math.max(leftHeight,rightHeight)
    }
    
    countLeafNode(root=this.root){
        if(!root) return 0;
        if(!root.left && !root.right) return 1;
        return this.countLeafNode(root.left) + this.countLeafNode(root.right)
    }


    findClosest(root=this.root,target){
        let closest= root.value;
        let current = root;

        while(current){
            if(Math.abs(target-current.value) < Math.abs(target-closest)){
                closest=current.value
            }
            if(target<current.value){
                current=current.left
            }else if(target>current.value){
                current=current.right
            }else{
                break;
            }
        }
        return closest
       
    }


    deleteNode(root=this.root,target){
        if(!root) return null;
        if(target<root.value){
            root.left=this.deleteNode(root.left,target)
        }else if(target>root.value){
            root.right=this.deleteNode(root.right,target)
        }else{
            if(!root.left && !root.right){
                return null;
            }

            if(!root.right) return root.left;
            if(!root.left) return root.right;

            const successor = this.findMin(root.right)
            root.value=successor.value;
            root.right=this.deleteNode(root.right,successor)

        }
        return root;
    }



}



const bst = new BinarySearchTree();

bst.insert(3)
bst.insert(5)
bst.insert(7)
bst.insert(10)
bst.insert(12)
bst.insert(15)
bst.insert(20)
bst.deleteNode(undefined,15)
bst.inOrder()

console.log("Is Valid BST", bst.isValidBST());
console.log("Search in BST", bst.search(5));
console.log("Find Kth Smallest", bst.kthSmallest(3));
console.log("Find Kth Largest", bst.kthLargest(3));
console.log("Find Min", bst.findMin());
console.log("Find Max", bst.findMax());
console.log("Find Height of BST", bst.findHeight());
console.log("Count Leaf Node ", bst.countLeafNode());
console.log("Find Closest value", bst.findClosest(undefined,10));













