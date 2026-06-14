class MaxHeap {
    constructor() {
        this.heap = [];
    }

    _getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    _getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    _getRightChildIndex(i) {
        return 2 * i + 2;
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        let parentIndex = this._getParentIndex(index);

        while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
            parentIndex = this._getParentIndex(index);
        }
    }

    bubbleDown(index) {
        let length = this.heap.length;

        while (true) {
            let left = this._getLeftChildIndex(index);
            let right = this._getRightChildIndex(index);
            let largest = index;

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[largest], this.heap[index]] =
                [this.heap[index], this.heap[largest]];

            index = largest;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return max;
    }
}




const heap = new MaxHeap()

heap.insert(30)
heap.insert(20)
heap.insert(10)
heap.insert(50)
heap.insert(60)
console.log(heapSort(heap));


function heapSort(heap){
      
       let result=[]
        while(heap.heap.length>0){
                result.unshift(heap.extractMax())
        }
        return result
}