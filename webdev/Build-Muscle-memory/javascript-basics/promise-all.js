function ProcessCartItem(item){
    return new Promise((resolve) => {
        setTimeout(() => {
            const success = Math.random() > 0.2;
            if(success){
                console.log(`itemId : ${item.id} processed successfully `)
                resolve({itemId : item.id, status : 200 })
            }else{
                console.log(`itemId : ${item.id} process failed`)
                reject({itemId : item.id, status : 500})
            }

        }, Math.random() * 1000)
    })
}
async function checkoutPage(Cartitems){
    const item = Cartitems.map(item => ProcessCartItem(item))

    try{
        const resp = await Promise.all(item)
        console.log( 'All items processed successfully.....proceeding to payment')
        
    }catch(error){
        console.error( 'process failed...', error)
        
    }
}

const items = [
    { id : 1, name : "item-1"},
    { id : 2, name : "item-2"},
    { id : 3, name : "item-3"},
    { id : 4, name : "item-4"},
]

checkoutPage(items)



// See this beautiful example by running it :

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