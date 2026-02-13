import express from "express";
import { pad } from "./lib.ts";

const app = express();
app.use(express.json());

let validOtps = {};
let requests  = {};
console.log(requests);

setInterval(() => {
    requests = {};
}, 180 * 1000)

app.post('/generate-otp', (req, res) => {
    const email = req.body.email;
    const otpNumber = Math.floor(Math.random() * 1000000);
    const paddedOtp = pad(otpNumber); 
    
    validOtps[email] = paddedOtp;
    console.log(`OTP for ${email} is ${paddedOtp}`);

    res.json({
        message: "Check the sent OTP in your email"
    });
});

app.post('/verify-otp',(req,res) => {
    const {email, otp, newPassword} = req.body;

    if(!requests[email]){
        requests[email] = 1;
    }else{
        requests[email]++;
    }

     console.log(`Rate limit for ${email}: ${requests[email]}`); // ADD THIS

    if(requests[email] >= 10){
        return res.status(429).json({
            message : "Too many requests"
        })
    }

    if (!email || !otp || !newPassword) {
        return res.status(400).json({ message: "Email, OTP, and new password are required" });
    }

    const paddedClientOtp = pad(Number(otp));

    if(validOtps[email]== paddedClientOtp){
        console.log(`Password for ${email} has been reset to ${newPassword}`);
        delete validOtps[email];

        res.json({
            success : true,
            message : "Password reset successfully"
        })
    }else {
        res.status(401).json({
            success : false,
            message : "Invalid OTP"
        })
    }
})

app.get('/website',(req,res) => {
    res.sendFile("D:/cohort-3/webdev/Week-45-RateLimiting-DDos/index.html")
})

app.listen(3000,()=> {
    console.log(`server listening on port 3000`)
})