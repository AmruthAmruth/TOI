class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                return; // duplicate values ignored
            }
        }
    }

    search(value) {
        let current = this.root;

        while (current) {
            if (current.value === value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    inOrder(node = this.root) {
        if (!node) return;

        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    preOrder(node = this.root) {
        if (!node) return;

        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node = this.root) {
        if (!node) return;

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

    isValidBST(root = this.root, min = -Infinity, max = Infinity) {
        if (!root) return true;

        if (root.value <= min || root.value >= max) {
            return false;
        }

        return (
            this.isValidBST(root.left, min, root.value) &&
            this.isValidBST(root.right, root.value, max)
        );
    }

    kthSmallest(k) {
        let result = null;
        let count = 0;

        function inOrderTravel(node) {
            if (!node || result !== null) return;

            inOrderTravel(node.left);

            count++;
            if (count === k) {
                result = node.value;
                return;
            }

            inOrderTravel(node.right);
        }

        inOrderTravel(this.root);
        return result;
    }

    findMin() {
        if (!this.root) return null;

        let current = this.root;

        while (current.left) {
            current = current.left;
        }

        return current.value;
    }

    findMax() {
        if (!this.root) return null;

        let current = this.root;

        while (current.right) {
            current = current.right;
        }

        return current.value;
    }

    findHeight(root = this.root) {
        if (!root) return -1;

        let leftHeight = this.findHeight(root.left);
        let rightHeight = this.findHeight(root.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    countLeafNode(root = this.root) {
        if (!root) return 0;

        if (!root.left && !root.right) {
            return 1;
        }

        return this.countLeafNode(root.left) + this.countLeafNode(root.right);
    }

    findClosest(target, root = this.root) {
        if (!root) return null;

        let closest = root.value;
        let current = root;

        while (current) {
            if (Math.abs(target - current.value) < Math.abs(target - closest)) {
                closest = current.value;
            }

            if (target < current.value) {
                current = current.left;
            } else if (target > current.value) {
                current = current.right;
            } else {
                break;
            }
        }

        return closest;
    }
}

// Testing
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("InOrder:");
bst.inOrder(); // 3 5 7 10 15

console.log("PreOrder:");
bst.preOrder(); // 10 5 3 7 15

console.log("PostOrder:");
bst.postOrder(); // 3 7 5 15 10

console.log("Search 7:", bst.search(7)); // true
console.log("Search 20:", bst.search(20)); // false

console.log("Is Valid BST:", bst.isValidBST()); // true
console.log("Kth Smallest 3:", bst.kthSmallest(3)); // 7

console.log("Minimum:", bst.findMin()); // 3
console.log("Maximum:", bst.findMax()); // 15

console.log("Height of BST:", bst.findHeight()); // 2
console.log("Leaf Node Count:", bst.countLeafNode()); // 3

console.log("Closest to 6:", bst.findClosest(6)); // 5 or 7, here 5