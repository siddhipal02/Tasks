//frequency
// let arr = [2,2,4]
// let m = new Map();
// for(let i=0;i< arr.length;i++)
// {
// m.set(arr[i], (m.get(arr[i]) || 0) +1)
// }
//     console.log(m);
// for (let[key,value] of m)
// {
//     if(value ===1)
//         console.log(key);
// }


//Find the maximum number in an array.
let arr= [2,5,1,7,9,10]
let a= arr.reduce((x,y) => Math.max(x,y), 0)
console.log(a);


//Sort an array in ascending order.
// let arr= [2,5,1,7,9,10]
// let a= arr.sort((x,y) => x-y)
// console.log(a, a.length);


//Remove duplicates from an array.
// let arr=[2,2,3,4,5,5,5,6,8,2]
// let dups=[]
// let index=0
// for(let i in arr)
// {
//     if(!dups.includes(arr[i]))
//     {
//         dups[index] = arr[i]
//         index++;
//     }

// }
// console.log(dups);


