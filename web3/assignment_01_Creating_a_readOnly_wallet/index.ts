import { generateMnemonic,mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";


console.log("Mnemonic --> Seed --> DerivationPath --> Wallet Seeds")

const mnemonic =  generateMnemonic();
console.log("mnemonic: ",mnemonic);
console.log("-----");

const seed = await mnemonicToSeed(mnemonic);
console.log("seed: ", seed.toString("hex"));
console.log("-----");

function generateWalletKeyPairs(numOfAccounts:number = 4){
    for(let i=0; i < numOfAccounts ; i++){

        const path = `m/44'/501'/${i}'/0'`;
        const derivedWalletSeed =  derivePath(path, seed.toString("hex")).key;

        console.log(`derivedWalletSeed_${i}: ",${derivedWalletSeed.toString('hex')}`);
        const secret = nacl.sign.keyPair.fromSeed(derivedWalletSeed).secretKey

        const walletAddress = Keypair.fromSecretKey(secret).publicKey.toBase58();
        console.log(`walletAddress_${i}: ", ${walletAddress}`)
        
        const privateKey = Keypair.fromSecretKey(secret).secretKey.toBase64();
        console.log(`privateKey:${i}, ${privateKey}`)
        console.log("-----");
    }
}

generateWalletKeyPairs(4);
