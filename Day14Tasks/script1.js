const a = new Promise((resolve) => {
    const p1 = fetch('https://www.istockphoto.com/search/2/image-film?phrase=creative+arts')
    resolve(p1);
})

const b = new Promise((resolve) => {
    const p2 = fetch('https://medium.com/@kanikapal97')
    resolve(p2);
})

const c = new Promise((resolve) => {
    const p3 = fetch('https://www.w3schools.com/jsref/jsref_object_assign.asp')
    resolve(p3);
})

const d = new Promise((resolve, reject) => {
    const p4 = fetch('https://www.w3schools.com/jsref/jsref_object_assign.asp')
    reject("rejected");
})

Promise.all([a,b,c,d]).then((result) => {
    console.log("all promises are resolved")
}).catch((error) => {
    console.log(error);
});






