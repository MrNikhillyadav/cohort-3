import express from "express";
import { pad } from "./config.ts";

const app = express();
app.use(express.json());

const validOtps = {};

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


app.listen(3000,()=> {
    console.log(`server listening on port 3000`)
})