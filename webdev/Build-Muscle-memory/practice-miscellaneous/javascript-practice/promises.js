// creating a promise

const p = new Promise((resolve, reject) => {
    console.log("promise top")
    setTimeout(() => {
        resolve("resolved")
    },3000)
    console.log("promise bottom")
})

p.then(() => {
    console.log("after promise is done")
})

//