// creating a promise

// const p = new Promise((resolve, reject) => {
//     console.log("promise top")
//     setTimeout(() => {
//         resolve("resolved")
//     },3000)
//     console.log("promise bottom")
// })

// p.then(() => {
//     console.log("after promise is done")
// })


// async function SetTimeoutPromisified(t){

//     return new Promise((resolve, reject) =>{
//         console.log('top')
//         setTimeout(() => {
//             resolve("resolved")
//         }, t*1000)
//         console.log('botton')
//     })

// }

// SetTimeoutPromisified(4).then((res) => {
//     console.log('res: ', res);
    
// })


// PromisifiedSetTimeout

// async function Promisified(){
//     function AsyncOperation(resolve){
//         setTimeout(() => {
//             console.log("after 3 sec")
//             resolve()
//         }, 3000)

//     }

//     const p = await  new Promise(AsyncOperation)
//     return p;
// }

// Promisified()


//sleep


// function Sleep(t){

//     return new Promise((resolve,reject) => {

//         setTimeout(() => {
//             resolve(`slept for ${t} sec`)
//         },t*1000)
//     })
// }

// async function callSleep(){

//     await Sleep(4)
//     console.log('4sec')

//     await Sleep(5)
//     console.log('5sec')

// }

// callSleep()




// function SleepTimer(t){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(`slept for ${t} sec`)
//         },t*1000)
//     })
// }

// const p1 = SleepTimer(8)
// const p2 = SleepTimer(6)
// const p3 = SleepTimer(3)


// // Runs asynchronously. Output : 3 sec, 6 sec, 8 sec, completed all promises. Total : 8 sec
// async function callUsingPromiseAll(){
//     await Promise.all([
//         p1.then((x)=> console.log(x)),
//            p2.then((x)=> console.log(x)),
//               p3.then((x)=> console.log(x))])
//         console.log("completed all promises")
// }
// callUsingPromiseAll()




// What are promises ?
// Promises are JS objects that represent the eventual completion or failure of an asynchronous 
// operation. It acts as a placeholder of an async task that will get complete eventually.It can have
// three states : Pending , fulfilled or rejected.

// Example :

// const p = new Promise((resolve,reject) => {
//     console.log("sleeping.....")
//     setTimeout(() => {
//         resolve('wake up')
//     }, 3000)
// })
// p.then((resp) => {
//     console.log(resp)
// })



function SetTimeoutPromisified(t){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`slept for ${t} sec.....`)
            resolve()
        }, t* 1000)
    })
}

// SetTimeoutPromisified(10)
// .then((resp) => {
//     console.log(resp)
// })


// 2sec 5sec 10sec 16sec   runs synchronously : Total duration : 41 sec 

// SetTimeoutPromisified(2)
// .then(() => {
//     return SetTimeoutPromisified(5)
// })
// .then(() => {
//     return SetTimeoutPromisified(8)
// })
// .then(() => {
//     return SetTimeoutPromisified(10)
// })
// .then(() => {
//     return SetTimeoutPromisified(16)
// })

// 2sec 5sec 10sec 16sec   runs asynchronously : Total duration : 16 sec

Promise.all([
    SetTimeoutPromisified(2),
    SetTimeoutPromisified(5),
    SetTimeoutPromisified(8),
    SetTimeoutPromisified(10),
    SetTimeoutPromisified(16)
])


// Note: Promise.all() me direct function me time pass kr rhe hain, synchronous banana h to .then()/async await syntax use krenge.

