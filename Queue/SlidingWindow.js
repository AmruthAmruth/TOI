



function findMaxSum(arr,k){
    let sum = 0;
    for(let i=0;i<k;i++){
        sum+=arr[i]
    }
    let max=sum
    for(let i=k;i<arr.length;i++){
            sum=sum-arr[i-k]+arr[i];
            max=Math.max(sum,max)
    }
    return max
}

console.log(findMaxSum([1,2,3,4,5,6],2));




function longestUnique(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestUnique("aacdaf"));
