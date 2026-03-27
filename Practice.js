






// function moveZero(arr){
//   let index=0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//       [arr[i],arr[index]]=[arr[index],arr[i]]
//       index++
//     }
//   }
//   return arr
// }


// console.log(moveZero([0,1,0,3,12]));





// const products = {
//   apple: { price: 10, qty: 2 },
//   banana: { price: 5, qty: 4 },
//   orange: { price: 8, qty: 3 }
// }



// function sumOfProducts(obj){
//   let total=0;
//   for(let key in obj){
//     total+= obj[key].price * obj[key].qty
//   }
//   return total
// }

// console.log(sumOfProducts(products));




// const products = {
//   apple: { price: 10, qty: 2 },
//   banana: { price: 5, qty: 4 },
//   orange: { price: 8, qty: 3 }
// }



// function sumOfProducts(obj){
//   let total=0;
//   for(let key in obj){
//     total+= obj[key].price * obj[key].qty
//   }
//   return total
// }

// console.log(sumOfProducts(products));




// let arr=[1,2,2,3,1,4,2]


// function countFrequency(arr){
//        let set = new Set();

//        for(let num of arr){
//         set[num]=(set[num] || 0) +1
//        }

//        return {...set}
// }


// console.log(countFrequency(arr));





// function findDuplicates(arr){
//    let temp=[];
//    for(let i=0;i<arr.length;i++){
//        for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//           if(!temp.includes(arr[i])){
//             temp.push(arr[i])
//           }
//         }
//        }
//    }
//    return temp
// }




// console.log(findDuplicates([1,2,3,2,4,5,1,1]));







// function firstUnique(arr){
//          for(let i=0;i<arr.length;i++){
//           let isUnique=true
//               for(let j=i+1;j<arr.length;j++){
//                 if(arr[i] ===arr[j]){
//                     isUnique=false;
//                     break
//                 }
//               }
//               if(isUnique){
//                 return arr[i]
//               }
//          }
//          return -1
// }

// console.log(firstUnique([4,5,1,2,0,4]));



// function twoSum(arr,target){
//         let temp=0;
//         for(let i=1;i<arr.length-1;i++){
//           if(arr[i]+arr[temp]===target){all 
//             return [arr[temp],arr[i]]
//           }
//           temp++
//         }
//         return -1
// }

// let arr=[2,7,11,15]

// console.log(twoSum(arr,9));




// let arr=[1,2,[3,4],[5,[6,7]]];

// function flattenArray(arr){
//     let result = []

//     for(let item of arr){
//         if(Array.isArray(item)){
//             result = result.concat(flattenArray(item))
//         }else{
//             result.push(item)
//         }
//     }

//     return result
// }

// console.log(flattenArray(arr));






// const user = {
//   name: "Amruth",
//   age: 22,
//   role: "developer"
// }


// function getKeys(obj){
//      let keys=[];

//      for(let key in obj){
//       keys.push(key)
//      }

//      return keys
// }


// console.log(getKeys(user));






// let obj={
//   a: 1,
//   b: 2,
//   c: 3
// }

// function swapKeyValue(obj){
//      let result={};

//      for(let key in obj){
//       result[obj[key]]=keyi
//      }
//      return result
// }

// console.log(swapKeyValue(obj));




// const users = [
//   {name:"A", age:20},
//   {name:"B", age:21},
//   {name:"C", age:20}
// ]


// function groupByAge(users){
//          let result={}
//          for(let item of users){
//             if(!result[item.age]){
//               result[item.age]=[]
//             }
//             result[item.age].push(item)
          
//          }
//          return result
// }

// console.log(groupByAge(users));a){




// let arr=[1,2,2,3,4,4,5]


// function removeDuplicates(arr){
//            let temp=0;
//            for(let i=0;i<arr.length;i++){
//             let unique=true
//             for(let j=i+1;j<arr.length;j++){
//               if(arr[i]===arr[j]){
//                 unique=false;
//                 break;
//               }
//             }
//             if(unique){
//               arr[temp]=arr[i];
//               temp++
//             }
//            }

//            arr.length=temp;
//            return arr

// }


// console.log(removeDuplicates(arr));








// let arr=[1,2,3,4,5];

// function rotateArray(arr,k){
//   let n = arr.length;
//   let result=[]
//   for(let i=0;i<n-k;i++){
//         result.push(arr.shift())
//   }
//   while(result.length){
//     arr.push(result.shift())
//   }
//   return arr
// }

// console.log(rotateArray(arr,2));


// let arr=[-2,1,-3,4,-1,2,1,-5,4]
// function maxSubArray(arr){
//       let currentSum=arr[0];
//       let maxSum=arr[0];
//       for(let i=1;i<arr.length;i++){
//         currentSum= Math.max(arr[i],currentSum+arr[i]);
//         maxSum=Math.max(currentSum,maxSum)
//       }
//       return maxSum
// }


// console.log(maxSubArray(arr));








// function firstNonRepeating(arr){
//            let obj={};
//            for(let num of arr){
//             obj[num]=(obj[num]||0) +1
//            }
//            for(let num of arr){
//             if(obj[num]===1) return num
//            }
// }

// console.log(firstNonRepeating([4,5,1,2,0,4]))





// function longestWord(str){
//          let arr = str.split(" ");
//          let length=0
//          let result="";
//          for(let i=0;i<arr.length;i++){
//           if(length<arr[i].length){
//             length=arr[i].length;
//             result=arr[i]
//           }
//          }
//          return result
// }

// console.log(longestWord("I am learning JavaScript deeply"));






// function debounce(fn,dely){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//              fn()
//         },dely)
//     }
// }



// const debouncedFn = debounce(() => {
//   console.log("Called");
// }, 1000);

// debouncedFn();
// debouncedFn();
// debouncedFn();





                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            




