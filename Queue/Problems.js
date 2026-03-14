
// ============================================================
// 1️⃣ Reverse Entire Queue Using Recursion
// Time: O(n)
// Space: O(n)
// ============================================================

function reverseQueue(queue) {

    if (queue.length === 0) return;

    let front = queue.shift();   // Remove front
    reverseQueue(queue);         // Reverse remaining
    queue.push(front);           // Insert at rear

    return queue;
}



// ============================================================
// 2️⃣ Reverse First K Elements of Queue
// Time: O(n)
// Space: O(k)
// ============================================================

function reverseFirstK(queue, k) {

    if (k > queue.length || k <= 0) return queue;

    let stack = [];
    let n = queue.length;

    // Step 1: Move first k elements to stack
    for (let i = 0; i < k; i++) {
        stack.push(queue.shift());
    }

    // Step 2: Push back (reversed)
    while (stack.length) {
        queue.push(stack.pop());
    }

    // Step 3: Rotate remaining elements
    for (let i = 0; i < n - k; i++) {
        queue.push(queue.shift());
    }

    return queue;
}



// ============================================================
// 3️⃣ Swap Kth Element from Start and End
// Time: O(n)
// Space: O(n)
// ============================================================

function swapKth(queue, k) {

    let n = queue.length;
    if (k > n || k <= 0) return queue;

    let result = [];
    let firstValue, secondValue;

    // Find kth from start and end
    for (let i = 0; i < n; i++) {
        let value = queue.shift();

        if (i === k - 1) firstValue = value;
        if (i === n - k) secondValue = value;

        queue.push(value);
    }

    // Build new swapped queue
    for (let i = 0; i < n; i++) {
        let value = queue.shift();

        if (i === k - 1) result.push(secondValue);
        else if (i === n - k) result.push(firstValue);
        else result.push(value);

        queue.push(value);
    }

    return result;
}



// ============================================================
// 4️⃣ Queue Using Two Stacks
// Enqueue: O(1)
// Dequeue: Amortized O(1)
// ============================================================

class QueueUsingStack {

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        this.stack1.push(x);
    }

    dequeue() {

        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    front() {

        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}



// ============================================================
// Example Usage
// ============================================================

// let q = [1,2,3,4,5,6];
// console.log(reverseQueue(q));

// let q2 = [1,2,3,4,5,6];
// console.log(reverseFirstK(q2,3));

// let q3 = [1,2,3,4,5];
// console.log(swapKth(q3,2));