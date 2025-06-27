const a = new Promise((resolve, reject) => {
    const p1 = fetch('https://www.istockphoto.com/search/2/image-film?phrase=creative+arts')
    p1.then((res) => {
        if(res.ok)
        {
        resolve(res);
        }
    else 
    {
         reject("broken link1");
    }
}).catch(() => {reject ("network issue1")})
})

const b = new Promise((resolve, reject) => {
    const p2 = fetch('https://medium.com')
    p2.then((res) => {
        if(res.ok)
        {
        resolve(res);
        }
    else {
         reject("broken link2");
    }
}).catch(() => {reject ("network issue2")})
})

const c = new Promise((resolve, reject) => {
    const p3 = fetch('https://medium.com/@kanikapal97')
    p3.then((res) => {
        if(res.ok)
        {
        resolve(res);
        }
    else 
    {
         reject("broken link3");
    }
}).catch(() => {reject ("network issue3")})
})

const d = new Promise((resolve, reject) => {
    const p4 = fetch('https://www.w3schools.com/jsref/jsref_object_assign.asp')
    p4.then((res) => {
        if(res.ok)
        {
        resolve(res);
        }
    else {
         reject("broken link4");
    }
}).catch(() => {reject ("network issue4")})
})

Promise.all([a,b,c,d]).then((result) => {
    console.log("all promises are resolved")
}).catch((error) => {
    console.log(error);
});

