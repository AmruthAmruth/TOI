// ============================================================
// SORTING ALGORITHMS (Beginner → Advanced)
// ============================================================



// ============================================================
// 1️⃣ Bubble Sort
// Repeatedly swaps adjacent elements if they are in wrong order
//
// Time Complexity:
//   Worst: O(n²)
//   Average: O(n²)
//   Best: O(n) (if optimized with flag)
//
// Space Complexity: O(1)
// Stable: ✅ Yes
// ============================================================

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // Optimization: stop if already sorted
        if (!swapped) break;
    }

    return arr;
}



// ============================================================
// 2️⃣ Selection Sort
// Finds minimum element and places it at correct position
//
// Time Complexity:
//   Worst: O(n²)
//   Average: O(n²)
//   Best: O(n²)
//
// Space Complexity: O(1)
// Stable: ❌ No
// ============================================================

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}



// ============================================================
// 3️⃣ Insertion Sort
// Builds sorted portion one element at a time
//
// Time Complexity:
//   Worst: O(n²)
//   Average: O(n²)
//   Best: O(n)
//
// Space Complexity: O(1)
// Stable: ✅ Yes
// ============================================================

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}



// ============================================================
// 4️⃣ Merge Sort (Divide and Conquer)
//
// Time Complexity:
//   Worst: O(n log n)
//   Average: O(n log n)
//   Best: O(n log n)
//
// Space Complexity: O(n)
// Stable: ✅ Yes
// ============================================================

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}



// ============================================================
// 5️⃣ Quick Sort (Divide and Conquer)
//
// Time Complexity:
//   Worst: O(n²)
//   Average: O(n log n)
//   Best: O(n log n)
//
// Space Complexity: O(log n) (recursion)
// Stable: ❌ No
// ============================================================

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
}



// ============================================================
// Example Usage (Uncomment to Test)
// ============================================================

// console.log(bubbleSort([1,4,2,5,3]));
// console.log(selectionSort([2,1,6,4,5,3]));
// console.log(insertionSort([2,4,1,3,5]));
// console.log(mergeSort([2,1,5,3,4]));
// console.log(quickSort([2,1,5,3,4]));