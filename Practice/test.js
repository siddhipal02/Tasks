
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

//  let a =arr.reduce((x,y) => x+y , 0)
//  console.log(a);

//  let b = arr.find((key) => key > 3)
//  console.log(b);

//  let c= arr.filter((i) => {
//     if(i>3)
//         return " ";
//     })
//     console.log(c);

// How filter() works:
// It loops through each element in the array.

// It runs the callback function for each element.

// If the callback returns truthy, the element is kept in the new array.
// If it returns falsy, the element is skipped.


// let str = "hello world"
// let a = str.split(" ")
// for(let i of a)
// {
//    i= i.charAt(0).toUpperCase() + i.slice(1)
//    console.log(i);
// }
 
// const a = 5;
//     const b = "10"
//     const result =`${a + +b}`
//     console.log(result)
//     console.log(typeof result)

//     const result = "Hello" && "World" || 0 || null;
// console.log(result);

    const numbers = [1, 2, 3];
    const a = numbers.map(num => num % 2 === 0); 
    console.log(a);
    

    const nm = [1, 2, 3];
    const b = nm.map((num) => {
        if(num % 2 === 0)
            return num;
    })
     console.log(b);


    const n = [1, 2, 3];
    const c = n.filter(num => num % 2 === 0); 
    console.log(c);

    const n1 = [1, 2, 3];
    const d = n1.filter((num )=> {
        if(num % 2 === 0)
        return num;
     })
    console.log(d);