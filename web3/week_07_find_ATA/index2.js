import { 
  getAssociatedTokenAddress, 
  TOKEN_2022_PROGRAM_ID, 
  ASSOCIATED_TOKEN_PROGRAM_ID
} from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';


// Your custom token's mint address
const mint = new PublicKey('F8a8bCkGz7rARb2yh4Y9aGqpAj28srbcBZhVcXyA9e8v');

// Recipient's wallet address
const recipientWallet = new PublicKey('A1wx3kPMZiUNxTbc5Fa4HpSJDA4GJj1NDD3Kigqt4yym');

// Derive the ATA for this user and custom token
const ata = await getAssociatedTokenAddress(
  mint,
  recipientWallet,
  false, 
  TOKEN_2022_PROGRAM_ID ,
  ASSOCIATED_TOKEN_PROGRAM_ID
);

console.log('ATA Address:', ata.toBase58());   