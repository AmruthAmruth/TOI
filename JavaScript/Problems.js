// let arr = [1,2,3,4,3,2,1];



// function removeTheTarget(arr,target){
//        let temp=0;
//        for(let i=0;i<arr.length;i++){
//          if(arr[i]!==target){
//            arr[temp]=arr[i]
//            temp++
//          }
//        }
//        arr.length=temp;
//        return arr
// }

// console.log(removeTheTarget(arr,2));


let arr=[1,1,1,2,2,3]

function removeDuplicate(arr){
    let temp=2;
    for(let i=2;i<arr.length;i++){
        if(arr[i] !== arr[temp-2]){
            arr[temp]=arr[i];
            temp++
        }
    }
    arr.length=temp

    return arr;
}

console.log(removeDuplicate(arr));





let arr=[1,1,1,2,2,3]

function removeDuplicate(arr){
    let temp=2;
    for(let i=2;i<arr.length;i++){
        if(arr[i] !== arr[temp-2]){
            arr[temp]=arr[i];
            temp++
        }
    }
    arr.length=temp

    return arr;
}

console.log(removeDuplicate(arr));


// let arr=[0,1,0,3,12]


// function moveZeroToEnd(arr){
//     let temp=0;
//     for(let i=0;i<arr.length;i++){
//       if(arr[i] !== 0){
//         arr[temp]=arr[i];
//         temp++
//       }
//     }

//     arr.length=temp
//     for(let i=1;i<temp;i++){
//       arr.push(0)
//     }

//     return arr
// }

// console.log(moveZeroToEnd(arr));









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






