let a= 20;
let b= 70;

let waiting = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(10);
    }, 3000);
})

waiting.then((data)=>{
    let c = data;
    console.log(a+b+c);
})