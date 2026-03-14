// ============================================================
// SEARCHING ALGORITHMS
// ============================================================



// ============================================================
// 1️⃣ Linear Search
// Checks each element one by one
//
// Time Complexity:
//   Worst: O(n)
//   Average: O(n)
//   Best: O(1)
//
// Space Complexity: O(1)
// Works on: Unsorted + Sorted arrays
// ============================================================

function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Return index if found
        }
    }

    return -1; // Not found
}



// ============================================================
// 2️⃣ Binary Search (Iterative Version)
// Works ONLY on Sorted Arrays
//
// Time Complexity:
//   Worst: O(log n)
//   Average: O(log n)
//   Best: O(1)
//
// Space Complexity: O(1)
// ============================================================

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;   // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }

    return -1; // Not found
}



// ============================================================
// 3️⃣ Binary Search (Recursive Version)
// ============================================================

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {

    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}



// ============================================================
// Example Usage (Uncomment to Test)
// ============================================================

// console.log(linearSearch([1,2,3,4,5], 4));   // 3
// console.log(binarySearch([1,2,3,4,5], 3));   // 2
// console.log(binarySearchRecursive([1,2,3,4,5], 5)); // 4