function debounce(fn, delay) {
  let t
   return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => {
      
    }, delay);
  };
}