function outer() {
    const outerVar = 'I am from outer';

    function inner() {
        console.log(outerVar);
  }

    return inner;
}

const newClosure = outer();
newClosure();