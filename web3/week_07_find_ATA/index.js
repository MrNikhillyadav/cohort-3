const {getAssociatedTokenAddress, TOKEN_PROGRAM_ID,ASSOCIATED_TOKEN_PROGRAM_ID} = require("@solana/spl-token");
const {PublicKey} = require("@solana/web3.js");

async function main(){

    const ata = await getAssociatedTokenAddress(
            new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // USDC mint
            new PublicKey("A1wx3kPMZiUNxTbc5Fa4HpSJDA4GJj1NDD3Kigqt4yym"),// owner address
            false,
            TOKEN_PROGRAM_ID,
            ASSOCIATED_TOKEN_PROGRAM_ID  
        );

    console.log("ata: ", ata.toBase58());
}

main();