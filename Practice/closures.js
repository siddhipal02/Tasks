//example 1
// function outer() {
//     const outerVar = 'I am from outer';

//     function inner() {
//         console.log(outerVar);
//   }

//     return inner;
// }

// const newClosure = outer();
// newClosure();


//example 2
// function counter() {
//     let count = 0; 
//     return function () {
//         count++;
//         return count;
//     };
// }

// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());



//example 3
function createBankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(balance);
      } else {
        console.log("Insufficient funds");
      }
    }
  };
}

const myAccount = createBankAccount();
myAccount.deposit(500);   //  Balance becomes 1500
myAccount.withdraw(300);  //  Balance becomes 1200

//The variable balance is enclosed (remembered) by the inner functions deposit and withdraw. So any change made to balance inside one method is reflected in the other, because they both share the same balance variable from the outer scope (createBankAccount).


