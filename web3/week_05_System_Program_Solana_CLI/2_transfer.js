const { Connection, Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL, sendAndConfirmTransaction } = require("@solana/web3.js");
const  {transfer, TOKEN_2022_PROGRAM_ID} = require( "@solana/spl-token")

const connection = new Connection("https://api.devnet.solana.com", "finalized");


async function transferToGivenAccount(){
    const payer = Keypair.fromSecretKey(new Uint8Array([163,250,239,41,11,53,214,221,201,97,185,189,115,8,4,98,150,72,156,159,213,207,68,222,74,172,151,23,16,201,74,169,133,247,80,63,220,38,94,235,217,118,250,182,190,1,179,56,220,24,154,163,34,80,116,228,241,230,21,5,50,175,171,164]));
    console.log("from: ", payer.publicKey.toBase58());

    const newKeyPair = Keypair.generate();
    console.log("to: ", newKeyPair.publicKey.toBase58());

    const txn = new Transaction().add(
        SystemProgram.transfer({       //recipient's account should already exist, it can't create one.
            fromPubkey: payer.publicKey,
            toPubkey: newKeyPair.publicKey,
            lamports: 0.01*LAMPORTS_PER_SOL,
        })
    )
    console.log("txn successful!")
    
    const sig = await sendAndConfirmTransaction(connection,txn,[payer]); // new need to pass recipient's keypair
    console.log("sig: ", sig);
}

transferToGivenAccount()


