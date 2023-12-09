const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Promise 1")
    }, 3000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Promise 2")
    }, 4000)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject("Promise 3")
    }, 1000)
})

Promise.race([promise1, promise2, promise3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})