// function outer() {
//     const outerVar = 'I am from outer';

//     function inner() {
//         console.log(outerVar);
//   }

//     return inner;
// }

// const newClosure = outer();
// newClosure();



function counter() {
    let count = 0; 
    return function () {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());