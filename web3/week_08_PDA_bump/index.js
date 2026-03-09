const { Connection, PublicKey } = require("@solana/web3.js");
const { 
  getAssociatedTokenAddress,
  TOKEN_2022_PROGRAM_ID,
  unpackAccount
} = require("@solana/spl-token");

const connection = new Connection("https://api.devnet.solana.com");

async function getTokenBalance(owner, mintAddress) {

  const ataAddress = await getAssociatedTokenAddress(
    mintAddress,
    owner,
    false,
    TOKEN_2022_PROGRAM_ID
  );

  console.log("ATA:", ataAddress.toBase58());
  
  const accountData = await connection.getAccountInfo(ataAddress);
  console.log("accountData: ", accountData);

  // method : 1
  const unpackedBalance = await unpackAccount(ataAddress,accountData, TOKEN_2022_PROGRAM_ID);
  console.log("unpackedBalance : ", unpackedBalance.amount);  // 995000000000n
  
  // method : 2
  const balance = await connection.getTokenAccountBalance(ataAddress);
  console.log("Balance:", balance.value.uiAmount);   // 995
}

getTokenBalance(
  new PublicKey("A1wx3kPMZiUNxTbc5Fa4HpSJDA4GJj1NDD3Kigqt4yym"),
  new PublicKey("F8a8bCkGz7rARb2yh4Y9aGqpAj28srbcBZhVcXyA9e8v")
);