// Week 2 | Promises and async, await

// built in asyn funcitons : setTimeout(), readfilename(),fetch(),


// function callback(){
//     console.log("After 3 sec!");
// }

// setTimeout(callback,3000);



// function runAfter3sec(resolve){
//     setTimeout(resolve,3000)
// }

// function main(){
//     console.log('main after 3 sec')
// }

// runAfter3sec(main)




// function random(resolve){    
//     setTimeout(resolve,3000);
// }

// function callback(){
//     console.log('promise succeded....')
// }
// let p = new Promise(random);
// p.then(callback()
// );



// ######## PROMISIFIED setTimeout Syntax ##########



// function setTimeoutPromisified (resolve){
//     return new Promise(resolve => setTimeout(resolve,3000)); 
// };

// function callback(){
//     console.log('3 seconds have passed...')
// }

// setTimeoutPromisified(3000).then(callback)


// ### SIMPLER PROMISES VARIATIONS #####

// function AsyncOperation (resolve){
//     console.log("resolve succeded");
//     resolve()                       // resolve == callback
// };

// function callback(){
//     console.log('3 seconds have passed...')
// }

// const p = new Promise(AsyncOperation);

// p.then(callback)


// ######################################################

// function setTimeoutPromisified(time){
//     function doSomething(resolve){
//         setTimeout(resolve , time);
//     }
//     return new Promise(doSomething)
// }

// function callback(){
//     console.log('few seconds has passed!');
// }

// const p = setTimeoutPromisified(5000)
// p.then(callback)


// ######################################################

// const promiseOne = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log(' promise one resolved');
//         resolve()
//     },3000)

// })

// function CallbackAfterPromise (){
//     console.log('CallbackAfterPromise succeded!')
// }

// promiseOne.then(CallbackAfterPromise)


// #########################################################


// function setTimeoutPromisified(resolve){
//     return  new Promise(resolve => setTimeout(resolve,3000));   
// }

// function afterPromise(){
//     console.log('main succeded!');
// }

// setTimeoutPromisified(3000).then(afterPromise)


// ########################################################

// const promiseData = new Promise (function(resolve){
//     console.log('5 second timer running')
//         setTimeout(function(){
//             console.log('timer stops')
//             resolve({username:"Nikhil Y",email:'facts.foundr@gmail.com'})
//         },5000)
// })

// promiseData.then(function(user){
//     console.log('callback ran!')
//     console.log(user)
// })

//  ##########################################################

//ASSIGNMENT

// function  setTimeoutPromisified(time){
//     return  new Promise(resolve => setTimeout(resolve,time));
// }

// setTimeoutPromisified(4000)
// .then(function(){
//     console.log('3 sec passed')
//     return  setTimeoutPromisified(3000);
// })
// .then(function(){
//     console.log('5 sec passed....')
//     return  setTimeoutPromisified(5000);
// })
// .then(function(){
//     console.log('10 sec passed ...')
//     return  setTimeoutPromisified(10000);
// })

// ---------------ASYNC AWAIT---------------------------------------------------------------------------

// 

// function setTimeoutPromisified(time){
//     return new Promise(resolve => setTimeout(resolve,time))
// }

// async function solve(){
//     await setTimeoutPromisified(3000);
//     console.log('hi');
//     await setTimeoutPromisified(6000);
//     console.log('hello');
//     await setTimeoutPromisified(10000);
//     console.log('hello there');
// }

// solve();


// ---------------   I/O  operations ------------------------- 

// const fs = require('fs')                  


// synchronously reading files

// const contents = fs.readFileSync('index.js', 'utf-8')
// console.log(contents)

// const content = fs.readFileSync('b.js', 'utf-8')
// console.log(content)



// asynchronously reading files

// fs.readFile('a.txt','utf-8',function(err,content){
//     console.log(content)
// })

// Better way to write using callbacks:

const fs = require('fs')  

function afterFileRead(err,content){
    console.log(content)
}

fs.readFile('a.txt', 'utf-8', afterFileRead)
fs.readFile('b.txt', 'utf-8', afterFileRead)

