import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

// Connect to devnet
const connection = new Connection( "https://api.devnet.solana.com");

// Your wallet (sender) — load from secret key
const sender = Keypair.fromSecretKey(Uint8Array.from([163,250,239,41,11,53,214,221,201,97,185,189,115,8,4,98,150,72,156,159,213,207,68,222,74,172,151,23,16,201,74,169,133,247,80,63,220,38,94,235,217,118,250,182,190,1,179,56,220,24,154,163,34,80,116,228,241,230,21,5,50,175,171,164]));

// Recipient address
const recipient = new PublicKey("AXNTXhtUwXXyFmYbMM44udqSCyzFdDq22uytrigmNLJu");

// Build the transaction
const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: recipient,
    lamports: 0.1 * LAMPORTS_PER_SOL, // 0.1 SOL
  })
);

// Send and confirm
const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);
console.log("SOL Transfer signature:", signature);