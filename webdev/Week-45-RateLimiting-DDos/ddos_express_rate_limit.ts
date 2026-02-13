import express from "express";
import { pad } from "./lib.ts";
import rateLimit, { ipKeyGenerator } from "express-rate-limit";

const app = express();
app.use(express.json());

const generateOtpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again after 5 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    keyGenerator: (req, res) => ipKeyGenerator(req.body.email),
});

const verifyOtpLimiter = rateLimit({
    windowMs:  5 * 60 * 1000, // 5 minutes
    max: 5, // Limit each IP to 5 password reset requests per windowMs
    message: 'Too many password reset attempts, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req, res) => ipKeyGenerator(req.body.email),
});

const SECRET_KEY = "0x4AAAAAACb3aDnIsE2KSE5FgRDXrrFIrSM"

let validOtps = {};
let requests  = {};
console.log(requests);

setInterval(() => {
    requests = {};
}, 180 * 1000)

app.post('/generate-otp',generateOtpLimiter, (req, res) => {
    const email = req.body.email;
    const otpNumber = Math.floor(Math.random() * 1000000);
    const paddedOtp = pad(otpNumber); 
    
    validOtps[email] = paddedOtp;
    console.log(`OTP for ${email} is ${paddedOtp}`);

    res.json({
        message: "Check the sent OTP in your email"
    });
});

app.post('/verify-otp',verifyOtpLimiter, async(req,res) => {
    const {email, otp, newPassword, token} = req.body;

    //DDOS protection using captcha token verification
    let formData = new FormData();
	formData.append('secret', SECRET_KEY);
	formData.append('response', token);

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
        body: formData,
        method: 'POST',
    });
    const challengeSucceeded = (await result.json() as unknown as any).success;

    if (!challengeSucceeded) {
        return res.status(403).json({ message: "Invalid reCAPTCHA token. You are a bot" });
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