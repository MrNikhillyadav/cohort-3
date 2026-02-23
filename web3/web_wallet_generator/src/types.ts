

export interface Wallet {
  index: number;
  derivationPath: string;
  publicKey: string;
  privateKey: string;
}

export interface GenerateResult {
  mnemonic: string;
  wallets: Wallet[];
}