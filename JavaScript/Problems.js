/*************************************************
 * 🔹 1. REMOVE TARGET ELEMENT (IN-PLACE)
 *************************************************/
function removeTarget(arr, target) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[index] = arr[i];
      index++;
    }
  }

  arr.length = index;
  return arr;
}

console.log("1:", removeTarget([1,2,3,2,4], 2)); 
// Output: [1,3,4]



/*************************************************
 * 🔹 2. REMOVE DUPLICATES (ALLOW ONLY 2 TIMES)
 *************************************************/
function removeDuplicatesTwice(arr) {
  if (arr.length <= 2) return arr;

  let index = 2;

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[index - 2]) {
      arr[index] = arr[i];
      index++;
    }
  }

  arr.length = index;
  return arr;
}

console.log("2:", removeDuplicatesTwice([1,1,1,2,2,3]));
// Output: [1,1,2,2,3]



/*************************************************
 * 🔹 3. MOVE ZEROES TO END
 *************************************************/
function moveZeroes(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }

  return arr;
}

console.log("3:", moveZeroes([0,1,0,3,12]));
// Output: [1,3,12,0,0]



/*************************************************
 * 🔹 4. FLATTEN ARRAY (RECURSION)
 *************************************************/
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log("4:", flattenArray([1,2,[3,4],[5,[6,7]]])); 
// Output: [1,2,3,4,5,6,7]



/*************************************************
 * 🔹 5. FIRST NON-REPEATING ELEMENT
 *************************************************/
function firstNonRepeating(arr) {
  let map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of arr) {
    if (map[num] === 1) return num;
  }

  return -1;
}

console.log("5:", firstNonRepeating([4,5,1,2,0,4]));
// Output: 5



/*************************************************
 * 🔹 6. PAIRS WITH TARGET SUM
 *************************************************/
function pairs(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

console.log("6:", pairs([2,4,3,5,7], 7));
// Output: [[2,5],[4,3]]



/*************************************************
 * 🔹 7. GROUP ANAGRAMS
 *************************************************/
function groupAnagrams(arr) {
  let map = {};

  for (let word of arr) {
    let key = word.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  return Object.values(map);
}

console.log("7:", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]



/*************************************************
 * 🔹 8. SUM OF PRODUCTS
 *************************************************/
function sumOfProducts(obj) {
  let total = 0;

  for (let key in obj) {
    total += obj[key].price * obj[key].qty;
  }

  return total;
}

const products = {
  apple: { price: 10, qty: 2 },
  banana: { price: 5, qty: 4 }
};

console.log("8:", sumOfProducts(products));
// Output: 40

``

/*************************************************
 * 🔹 9. COUNT FREQUENCY
 *************************************************/
function countFrequency(arr) {
  let map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  return map;
}

console.log("9:", countFrequency([1,2,2,3,1,4,2]));
// Output: {1:2, 2:3, 3:1, 4:1}



/*************************************************
 * 🔹 10. FIND DUPLICATES
 *************************************************/
function findDuplicates(arr) {
  let result = [];
  let set = new Set();

  for (let num of arr) {
    if (set.has(num) && !result.includes(num)) {
      result.push(num);
    }
    set.add(num);
  }

  return result;
}

console.log("10:", findDuplicates([1,2,3,2,4,5,1]));
// Output: [2,1]



/*************************************************
 * 🔹 11. TWO SUM (OPTIMIZED)
 *************************************************/
function twoSum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (map[diff] !== undefined) {
      return [diff, arr[i]];
    }

    map[arr[i]] = i;
  }

  return -1;
}

console.log("11:", twoSum([2,7,11,15], 9));
// Output: [2,7]



/*************************************************
 * 🔹 12. GET OBJECT KEYS
 *************************************************/
function getKeys(obj) {
  let keys = [];

  for (let key in obj) {
    keys.push(key);
  }

  return keys;
}

console.log("12:", getKeys({name:"Amruth", age:22}));
// Output: ["name","age"]



/*************************************************
 * 🔹 13. SWAP KEY VALUE
 *************************************************/
function swapKeyValue(obj) {
  let result = {};

  for (let key in obj) {
    result[obj[key]] = key;
  }

  return result;
}

console.log("13:", swapKeyValue({a:1,b:2}));
// Output: {1:"a",2:"b"}



/*************************************************
 * 🔹 14. GROUP BY AGE
 *************************************************/
function groupByAge(users) {
  let result = {};

  for (let user of users) {
    if (!result[user.age]) {
      result[user.age] = [];
    }
    result[user.age].push(user);
  }

  return result;
}

console.log("14:", groupByAge([
  {name:"A", age:20},
  {name:"B", age:21},
  {name:"C", age:20}
]));
// Output: {20:[...],21:[...]}



/*************************************************
 * 🔹 15. ROTATE ARRAY
 *************************************************/
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log("15:", rotateArray([1,2,3,4,5], 2));
// Output: [4,5,1,2,3]



/*************************************************
 * 🔹 16. MAX SUBARRAY (KADANE)
 *************************************************/
function maxSubArray(arr) {
  let current = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    max = Math.max(max, current);
  }

  return max;
}

console.log("16:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 6



/*************************************************
 * 🔹 17. LONGEST WORD
 *************************************************/
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log("17:", longestWord("I am learning JavaScript deeply"));
// Output: "JavaScript"



/*************************************************
 * 🔹 18. DEBOUNCE
 *************************************************/
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Example:
const debouncedFn = debounce(() => {
  console.log("Debounced Call");
}, 1000);

debouncedFn();
debouncedFn();
debouncedFn(); // Only this runs 





let str="aaeeeeeeedb"


function freqCount(str){
  let map={};
  for(let char of str){
    map[char]=(map[char]||0)+1
  }
  let result="";
  for(let key in map){
    result+=key+map[key]
  }

return result

}




console.log(freqCount(str));
