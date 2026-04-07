

// ============================================================
// 1️⃣ Stack Using Single Queue
// Push: O(n)
// Pop: O(1)
// Space: O(n)
// ============================================================

class StackUsingQueue {

    constructor() {
        this.queue = [];
    }

    // Push element onto stack
    push(x) {
        this.queue.push(x);

        // Rotate queue so newest element comes to front
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    // Remove top element
    pop() {
        if (this.isEmpty()) return null;
        return this.queue.shift();
    }

    // View top element
    peek() {
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}



// ============================================================
// 2️⃣ Balanced Parenthesis Using Stack
// Time: O(n)
// Space: O(n)
// ============================================================

function isBalancedParenthesis(str) {

    let map = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    let stack = [];

    for (let char of str) {

        // Opening brackets → push
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        }

        // Closing brackets → validate
        else if (char === '}' || char === ']' || char === ')') {

            if (stack.length === 0) return false;

            if (stack.pop() !== map[char]) return false;
        }
    }

    return stack.length === 0;
}




let arr =[1,2,3,4,5,6]


function swapMiddleTwo(stack){
    let n = stack.length;
    let midCount = Math.floor(n/2)-1;
    let temp =[];

    for(let i=0;i<midCount;i++){
        temp.push(stack.pop())
    }

    let mid1= stack.pop();
    let mid2= stack.pop();

    stack.push(mid1);
    stack.push(mid2);

    while(temp.length){
        stack.push(temp.pop())
    }

    return stack
}


console.log(swapMiddleTwo(arr));





function warmerTemperature(arr){
    let result = new Array(arr.length).fill(0);
    let stack = [];

    for(let i = 0; i < arr.length; i++){

        while(stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]){
            let index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
}

console.log(warmerTemperature([73,74,75,71,69,72,76,73]));