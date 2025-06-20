
const arr = [1,2,3,4,5,6]
// let a = 
// console.log(a);
// console.log(arr.filter((key) =>(key > 3)))
// console.log(arr)
// let a= arr.filter((key) => {
//     if(key>=3)  
//         console.log(key);  
// })
 //console.log(a);

 let a =arr.reduce((x,y) => x+y , 0)
 console.log(a);

 let b = arr.find((key) => key > 3)
 console.log(b);

 let c= arr.filter((i) => {
    if(i>3)
        return " ";
    })
    console.log(c);
