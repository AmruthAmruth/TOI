


function charFrequency(str){
   let set = new Set()
   for(let char of str){
    set[char]=(set[char] || 0)+1
   }
   return set
}

console.log(charFrequency("amruth"));


function firstUniqueChar(str){
    let set = new Set();
    for(let char of str){
        set[char]=(set[char]||0)+1
    }
     for(let char of str){
        if(set[char]===1) return char
     }
     return -1
}

console.log(firstUniqueChar("abbacd"));


function hasDuplicate(arr){
    let set = new Set();
    for(let n of arr){
        if(set.has(n)) return false;
        set.add(n)
    }
    return true
}

console.log(hasDuplicate([1,2,3,4]));



function towSum(arr,target){
    let map = new Set();
    for(let num of arr){
        if(map.has(target-num)) return true;
        map.add(num)
    }
    return false
}

console.log(towSum([1,2,3,4,5],5));



function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;
    let map = new Map()
    for(let ch of str1){
        map.set(ch,(map[ch]||0)+1)
    }
    for(let ch of str2){
        if(!map.has(ch) || map.get(ch)===0) return false
    }

    return true
}

console.log(isAnagram("strs","strs"));



function groupAnagrams(arr){
    let map = new Map();
    for(let word of arr){
        let key = word.split("").sort().join("");
        if(!map.has(key)) map.set(key,[]);
        map.get(key).push(word);
    }
    return [...map.values()]
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


