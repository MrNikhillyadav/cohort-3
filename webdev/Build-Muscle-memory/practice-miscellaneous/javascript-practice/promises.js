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




function SleepTimer(t){

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve(`slept for ${t} sec`)
        },t*1000)
    })
}

const p1 = SleepTimer(8)
const p2 = SleepTimer(6)
const p3 = SleepTimer(3)

async function callUsingPromiseAll(){
    await Promise.all([
        p1.then((x)=> console.log(x)),
           p2.then((x)=> console.log(x)),
              p3.then((x)=> console.log(x))])
        console.log("completed all promises")
}
callUsingPromiseAll()

