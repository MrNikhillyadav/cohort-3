const { Connection, PublicKey, getAccountInfo } = require("@solana/web3.js");
const {unpackAccount, TOKEN_2022_PROGRAM_ID } = require("@solana/spl-token");

const connection = new Connection("https://api.devnet.solana.com");

const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
);

async function getTokenBalance(owner, mintAddress) {

    const [ataAddress, bump] =  PublicKey.findProgramAddressSync( 
        [
            owner.toBuffer(),   //owner public key
            TOKEN_2022_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer(), //mint address
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    )

    console.log("ATA: ", ataAddress)
    console.log("bump: ", bump)

    const accountInfo = await connection.getAccountInfo(ataAddress);
    
    if (!accountInfo) {
        console.log("ATA does not exist");
        return;
    }
    console.log("accountData: ", accountInfo);


    const innerData = unpackAccount(
        ataAddress,
        accountInfo,
        TOKEN_2022_PROGRAM_ID
    );

    console.log("unpackedBalance:", Number(innerData.amount));
}

getTokenBalance(
  new PublicKey("A1wx3kPMZiUNxTbc5Fa4HpSJDA4GJj1NDD3Kigqt4yym"), // owner public key
  new PublicKey("F8a8bCkGz7rARb2yh4Y9aGqpAj28srbcBZhVcXyA9e8v") // mint address
);