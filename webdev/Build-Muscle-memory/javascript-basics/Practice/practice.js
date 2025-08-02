const student = {
    name : 'Nikhil',
    // can't use arrow function. Won't be able to apply call,bind,apply bcoz, `this` can't be used in it.
    // greet : () => {
    //     console.log(`Hi ${this.name}`)       // says `Hi undefined `
    // } 
    
    greet : function (...arg){
        console.log(` ${ arg } Good morning mr. ${this.name}`)
    }
}

const s1 = {name : "Rahul"}

student.greet.call(s1)

student.greet.apply(s1, [ ' Hello',' Hi', ' Namaste'])

const ans = student.greet.bind(s1)
ans()


// Promises

function PromisifiedGreet(resolve){
    console.log('start')
    
    setTimeout(() => {
        console.log('2 sec... Hi')
        resolve()
    }, 2000)

    setTimeout(() => {
        console.log('5 sec... Hello')
        resolve()
    }, 5000)

    setTimeout(() => {
        console.log('10 sec... Namaste')
        resolve()
    }, 10000)
}

const p1 = new Promise(PromisifiedGreet)



function PromisifiedGreet(t){
    return new Promise((resolve) => {

        setTimeout((t) => {
            resolve()
        }, t* 1000)

    })
}

async function PromisesCall(){
    const p1 = await PromisifiedGreet(3)
    console.log("3 sec has passed")
    const p2 = await PromisifiedGreet(5)
    console.log("5 sec has passed")
    const p3 = await PromisifiedGreet(10)
    console.log("10 sec has passed")
}

PromisesCall()


