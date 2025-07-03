// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


//doubt 1
// for (var i = 0; i < 3; i++) {
//   (function(j) {
//     setTimeout(() => console.log(j), 100);
//   })(i);
// }


//doubt 2
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("C");
//   });

// (async function() {
//   console.log("D");
//   await null;
//   console.log("E");
// })();

// console.log("F");




//this inside f() now points to window, not obj
// const obj = {
//   val: 42,
//   getVal: function() {
//     return this.val;
//   },
// };

// const f = obj.getVal;   //fix: const f = obj.getVal.bind(obj);
// console.log(f());

