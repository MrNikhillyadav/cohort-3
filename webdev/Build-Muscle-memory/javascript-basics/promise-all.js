// function ProcessCartItem(item){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.2;
//             if(success){
//                 console.log(`itemId : ${item.id} processed successfully `)
//                 resolve({itemId : item.id, status : 200 })
//             }else{
//                 console.log(`itemId : ${item.id} process failed`)
//                 reject({itemId : item.id, status : 500})
//             }

//         }, Math.random() * 1000)
//     })
// }
// async function checkoutPage(Cartitems){
//     const item = Cartitems.map(item => ProcessCartItem(item))

//     try{
//         const resp = await Promise.all(item)
//         console.log( 'All items processed successfully.....proceeding to payment')
        
//     }catch(error){
//         console.error( 'process failed...', error)
        
//     }
// }

// const items = [
//     { id : 1, name : "item-1"},
//     { id : 2, name : "item-2"},
//     { id : 3, name : "item-3"},
//     { id : 4, name : "item-4"},
// ]

// checkoutPage(items)



// See this beautiful example by running it :
function SleepTimer(t){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`slept for ${t} sec`)
            resolve(`slept for ${t} sec`)
        },t*1000)
    })
}

//synchronous style code using async/await : 17 seconds total
async function callUsingAsyncAwait(){
    await SleepTimer(8);
    console.log("8 sec passed")
    await SleepTimer(6);
    console.log("6 sec passed")
    await SleepTimer(3);
    console.log("3 sec passed")
}
callUsingAsyncAwait()



const p1 = SleepTimer(8)
const p2 = SleepTimer(6)
const p3 = SleepTimer(3)

// asynchronous style code using Promise.all  : 8 seconds total
async function callUsingPromiseAll1(){
    await Promise.all([
        p1.then((x)=> console.log(x)),
           p2.then((x)=> console.log(x)),
              p3.then((x)=> console.log(x))])
        console.log("completed all promises")
}
callUsingPromiseAll1()

// or we can do this also :
async function callUsingPromiseAll2(){
    await Promise.all([
        SleepTimer(8),
        SleepTimer(6),
        SleepTimer(3),
    ])
}

callUsingPromiseAll2()
