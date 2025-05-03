// const p = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("5 sec passed")
//         resolve()
//     },5000)
// })

// p.then(()=> {
//     console.log("after promise resolved ")
// }).catch(() => {
//     console.log("error in promise")
// })


// function AsyncOperation(resolve){
//     setTimeout(() => {
//         console.log("expensive operation")
//         resolve()
//     },5000)
// }

// function callback(){
//     console.log("some callback")
// }

// const p = new Promise(AsyncOperation)
// p.then(callback)


// function setTimeoutPromisified(){
//     function doAsyncOperation(resolve){
//         setTimeout(() => {
//             console.log('expensive call')
//             resolve()
//         },5000)
//     }
//     return new Promise(doAsyncOperation)
// }

// const p = setTimeoutPromisified()
// p.then(callback)


// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("3 sec passed")
//         resolve("3 sec have passed")
//     },3000)
// })
// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("5 sec passed")
//         resolve("5 sec have passed")
//     },5000)
// })
// const p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("10 sec passed")
//         resolve("10 sec have passed")
//     },10000)
// })

// p1.then(p2).then(p3)

function PromisifiedSetTimeout(time){
    return new Promise((resolve) => setTimeout(() => {
        resolve(`${time} sec have passed`)
    },time * 1000))
}

async function Solve(){
    await PromisifiedSetTimeout(3)
    console.log("3 sec passed")
    await PromisifiedSetTimeout(5)
    console.log("5 sec passed")
    await PromisifiedSetTimeout(10)
    console.log("10 sec passed")
}

Solve()