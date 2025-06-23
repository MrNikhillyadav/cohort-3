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