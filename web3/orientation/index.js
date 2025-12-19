const crypto = require('crypto')


// // Assignment 1
function findHashWithPrefix(prefix){
    let input = 0;
    
    while(true){
        let inputStr =  input.toString();

        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        if(hash.startsWith(prefix)){
            return {input : inputStr, hash : hash};
        }

        input++;
   } 
}

const result1 = findHashWithPrefix("0000")
console.log(result1)


// // Assignment 2
// // function findHashWithPrefix(prefix){
// //     let input = 0;
    
// //     while(true){
// //         let inputStr = "100xdevs" + input.toString();

// //         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

// //         if(hash.startsWith(prefix)){
// //             return {"input" : inputStr, "hash : ": hash};
// //         }

// //         input++;
// //    } 
// // }

// // const result2 = findHashWithPrefix("00000")
// // console.log(result2)


// function findHashWithPrefix(prefix){
//     let input = 0;
    
//     while(true){
//         let inputStr = `
//         harkirat => Raman | Rs 100  
//         Ram => Ankit | Rs 10 
//         ` + input.toString();

//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

//         if(hash.startsWith(prefix)){
//             return {"input" : inputStr, "hash : ": hash};
//         }

//         input++;
//    } 
// }

// const result3 = findHashWithPrefix("00000")
// console.log(result3)

