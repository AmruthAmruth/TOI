// ===============================
// 1️⃣ Reverse Array (Two Pointer Swap)
// ===============================
let arr1 = [1, 2, 3, 4, 5];
function reverseArraySwap(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return reverseArraySwap(arr, left + 1, right - 1);
}
console.log("Reversed array (swap):", reverseArraySwap([...arr1])); // [5,4,3,2,1]

// ===============================
// 2️⃣ Reverse Array (Shift & Push)
// ===============================
function reverseArrayShift(arr) {
    if (arr.length === 0) return [];
    let top = arr.shift();
    let reversed = reverseArrayShift(arr);
    reversed.push(top);
    return reversed;
}
console.log("Reversed array (shift):", reverseArrayShift([...arr1])); // [5,4,3,2,1]

// ===============================
// 3️⃣ Sum of Even Numbers in Array
// ===============================
function sumOfEvenNumbers(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] % 2 === 0
        ? arr[index] + sumOfEvenNumbers(arr, index + 1)
        : sumOfEvenNumbers(arr, index + 1);
}
console.log("Sum of even numbers:", sumOfEvenNumbers(arr1)); // 6

// ===============================
// 4️⃣ Largest Number in Array
// ===============================
function largestNumber(arr, index = 0, max = -Infinity) {
    if (index === arr.length) return max;
    if (arr[index] > max) max = arr[index];
    return largestNumber(arr, index + 1, max);
}
console.log("Largest number:", largestNumber(arr1)); // 5

// ===============================
// 5️⃣ Check if Array is Sorted
// ===============================
function isSortedArray(arr, index = 0) {
    if (index === arr.length - 1) return true;
    return arr[index] > arr[index + 1] ? false : isSortedArray(arr, index + 1);
}
console.log("Is array sorted?", isSortedArray(arr1)); // true

// ===============================
// 6️⃣ Count Frequency of Target in Array
// ===============================
function countNumberFreq(arr, target, index = 0, count = 0) {
    if (index === arr.length) return count;
    if (arr[index] === target) count++;
    return countNumberFreq(arr, target, index + 1, count);
}
console.log("Frequency of 1:", countNumberFreq([1, 2, 2, 3, 1, 6], 1)); // 2

// ===============================
// 7️⃣ Remove Target from Array
// ===============================
function removeTarget(arr, target, index = 0) {
    if (index === arr.length) return arr;
    if (arr[index] === target) {
        arr.splice(index, 1);
        return removeTarget(arr, target, index);
    } else {
        return removeTarget(arr, target, index + 1);
    }
}
console.log("Remove 2:", removeTarget([1, 2, 3, 2, 4], 2)); // [1,3,4]

// ===============================
// 8️⃣ Find First Index of Target
// ===============================
function findIndexOfTarget(arr, target, index = 0) {
    if (index === arr.length) return -1;
    return arr[index] === target ? index : findIndexOfTarget(arr, target, index + 1);
}
console.log("Index of 3:", findIndexOfTarget([5, 3, 7, 3, 9], 3)); // 1
console.log("Index of 30:", findIndexOfTarget([5, 3, 7, 3, 9], 30)); // -1

// ===============================
// 9️⃣ Find Last Index of Target
// ===============================
function lastIndexOfTarget(arr, target, index = arr.length - 1) {
    if (index < 0) return -1;
    return arr[index] === target ? index : lastIndexOfTarget(arr, target, index - 1);
}
console.log("Last index of 2:", lastIndexOfTarget([1, 2, 3, 4, 3, 2, 5], 2)); // 5
