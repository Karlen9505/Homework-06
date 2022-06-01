// 1. Get array of node ids from tree (keys).

// let tree = {
//     0:{
//         1: {
//             3:{
//
//             },
//             4:{
//                 6: {
//
//                 }
//             }
//         },
//         2:{
//             5:{
//
//             }
//         }
//     }
// };
//
// function arrFromTree(obj,arr = []) {
//     for (const objKey in obj) {
//         arr.push(+objKey);
//         arrFromTree(obj[objKey],arr)
//     }
//     return arr.sort((a,b)=> a-b)
// }
//
//
// console.log(arrFromTree(tree));



//2. Get array of nodes from tree.
//
// function objFromTree(obj,arr = []) {
//     for (const objKey in obj) {
//         arr.push({ id :+objKey ,
//                    children : Object.keys(obj[objKey])});
//         objFromTree(obj[objKey],arr)
//     }
//     return arr
// }
//
//
// console.log(objFromTree(tree));

//3. Implement binary search
// let array =  [2,6,4,9,5,1]
//
// function binarySearch(arr, target) { debugger;
//      arr.sort((a,b) => a-b);
//     console.log(arr)
//     let start = 0;
//     let  end = arr.length -1;
//     while (start <= end) {
//         let middle = Math.floor((start+end)/2);
//         if (arr[middle] === target) {
//             return middle
//         } else if (target < arr[middle]) {
//             end = middle - 1
//         } else if (target > arr[middle]) {
//             start = middle + 1
//         }
//     }
//     return "There is no such value"
// }
//
// console.log(binarySearch(array,5))







