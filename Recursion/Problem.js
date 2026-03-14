// ===============================
// 1️⃣ Factorial (Recursion)
// ===============================
function factorial(n) {
    if (n === 0) return 1; // factorial of 0 is 1
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5)); // 120

// ===============================
// 2️⃣ Fibonacci (Recursion)
// ===============================
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci 10th:", fibonacci(10)); // 55

// ===============================
// 3️⃣ Sum of Digits
// ===============================
function sumOfDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
console.log("Sum of digits 12345:", sumOfDigits(12345)); // 15

// ===============================
// 4️⃣ Prime Check (Recursion)
// ===============================
function isPrime(num, i = 2) {
    if (num < 2) return false;
    if (i * i > num) return true;
    if (num % i === 0) return false;
    return isPrime(num, i + 1);
}
console.log("Is 17 prime?", isPrime(17)); // true

// ===============================
// 5️⃣ Sum of Primes in Array
// ===============================
function sumOfPrimes(arr, index = 0) {
    if (index === arr.length) return 0;
    let current = isPrime(arr[index]) ? arr[index] : 0;
    return current + sumOfPrimes(arr, index + 1);
}
console.log("Sum of primes [2-10]:", sumOfPrimes([2,3,4,5,6,7,8,9,10])); // 17

// ===============================
// 6️⃣ Remove Even Numbers (In-place)
// ===============================
function removeEvenNumbers(arr, index = 0) {
    if (index === arr.length) return arr;
    if (arr[index] % 2 === 0) {
        arr.splice(index, 1);
        return removeEvenNumbers(arr, index); // stay at same index
    } else {
        return removeEvenNumbers(arr, index + 1);
    }
}
console.log("Remove even [1-8]:", removeEvenNumbers([1,2,3,4,5,6,7,8])); // [1,3,5,7]

// ===============================
// 7️⃣ Deep Clone (Object & Array)
// ===============================
function deepClone(value) {
    if (value === null || typeof value !== "object") return value;

    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));
    }

    let obj = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            obj[key] = deepClone(value[key]);
        }
    }
    return obj;
}

// Example
let original = {
    name: "Amruth",
    skills: ["JS", "React", { backend: "Node" }],
};

let cloned = deepClone(original);
cloned.skills[2].backend = "Express";

console.log("Original backend:", original.skills[2].backend); // Node
console.log("Cloned backend:", cloned.skills[2].backend);     // Express

// ===============================
// 8️⃣ Get All Files from Nested FileSystem
// ===============================
const fileSystem = {
    "folder1": {
        "file1.txt": "file",
        "file2.txt": "file",
        "subfolder1": {
            "file3.txt": "file"
        }
    },
    "folder2": {
        "file4.txt": "file",
        "subfolder2": {
            "file5.txt": "file",
            "subsubfolder": {
                "file6.txt": "file"
            }
        }
    },
    "file7.txt": "file"
};

function getAllFiles(fs) {
    let files = [];
    for (let key in fs) {
        if (fs[key] === "file") {
            files.push(key);
        } else if (typeof fs[key] === "object") {
            files = files.concat(getAllFiles(fs[key]));
        }
    }
    return files;
}
console.log("All files in filesystem:", getAllFiles(fileSystem));






function binarySearch(arr,target,left=0,right=arr.length-1){
    if(left>=right) return -1;
      let mid = Math.floor((left+right)/2)
      if(arr[mid]===target) return mid
      if(arr[mid]<target){
          return binarySearch(arr,target,left=mid+1,right)
        }else{
          return binarySearch(arr,target,left,right=mid-1)
      }
}

let arr=[1,2,3,4,5,6,7]

console.log(binarySearch(arr,2));
