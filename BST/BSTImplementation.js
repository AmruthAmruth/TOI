


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }


    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return
                }
                current = current.left
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return
                }
                current = current.right
            }
        }
    }


    inOrder(node = this.root) {
        if (!node) return;
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right)
    }

    preOrder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right)
    }

    postOrder(node = this.root) {
        if (!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

    isValidBST(root=this.root,min=-Infinity,max=Infinity){
        if(!root) return true;
        if(root.value<= min || root.value>=max){
            return false
        }
        return(
            this.isValidBST(root.left,min,root.value) && this.isValidBST(root.right,root.value,max)
        )
    }


  search(value){
    if(!this.root) return false;
    let current = this.root;
    while(current){
        if(current.value==value) return true;
        if(value<current.value){
            current=current.left
        }else if(value>current.value){
            current=current.right
        }
    }
    return false
  }



  kthSmallest(k){
   
    let result=null
    let count=0

    function inOrderTravels(node){
        if(!node || result !== null) return;

        inOrderTravels(node.left)
        count++;
        if(count===k){
            result=node.value;
            return
        }
        inOrderTravels(node.right)

    }

    inOrderTravels(this.root);
    return result
  }


kthLargest(k){
    let result=null;
    let count=0;
    function postOrderTravals(node){
        if(!node || result !==null) return;
        postOrderTravals(node.right)
        count++
        if(count===k){
            result=node.value;
            return
        }
        postOrderTravals(node.left);
    }
    postOrderTravals(this.root);
    return result
}





findHeight(root=this.root){
    if(!root) return -1;
    let leftHeight= this.findHeight(root.left);
    let rightHeight=this.findHeight(root.right);
    return 1 + Math.max(leftHeight,rightHeight)
}


countLeafNodes(root=this.root){
    if(!root) return 0;
    if(!root.left && root.right) return 1;
    return this.countLeafNodes(root.left) + this.countLeafNodes(root.right)
}


findClosest(root=this.root,target){
    let closest= root.value;
    let current = this.root
    while(current){
        if(Math.abs(target-current.value) < Math.abs(target-closest)){
            closest=current.value
        }

        if(target<current.value){
            current=current.value
        }else if(target>current.value){
            current=current.value
        }else{
            break;
        }
    }

    return closest
}


findMin(node){
    if(!node) return
    let current=node;

    while(current.left){
      current=current.left
    }
    return current
}



deleteNode(root=this.root,target){
    if(!root) return null;
    if(target<root.value){
        root.left=this.deleteNode(root.left,target)
    }else if(target>root.value){
        root.right=this.deleteNode(root.right,target)
    }else{


        if(root.left==null && root.right==null) return null;

        if(root.right===null) return root.left;
        if(root.left===null) return root.right;

        let successor = this.findMin(root.right);
        root.value = successor.value;
        root.right=this.deleteNode(root.right,successor.value)
    }
    return root
}








}



const bst = new BinarySearchTree()


bst.insert(5)

bst.insert(3)
bst.insert(7)
bst.insert(6)
bst.insert(4)
bst.deleteNode(undefined,7)
 bst.inOrder()
 console.log("----------------------------");
 
// console.log("kth smallest : ",bst.kthLargest(2));
//console.log("Find Min",bst.findMin());
// console.log(bst.countLeafNodes());

// console.log(bst.isValidBST());
// console.log(bst.search(3));

console.log(bst.findClosest(undefined,10));











