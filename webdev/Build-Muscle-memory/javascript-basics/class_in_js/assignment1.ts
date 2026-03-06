// 1. BASE CLASS - BankAccount
class BankAccount {
  protected readonly accountNumber: string;
  protected ownerName: string;
  private _balance: number = 0;
  private _transactionHistory: string[] = [];

  constructor(ownerName: string, initialBalance: number = 0) {
    this.ownerName = ownerName;
    this.accountNumber = BankAccount.generateAccountNumber();
    if (initialBalance > 0) {
      this._balance = initialBalance;
      this._addTransaction(`Initial deposit: $${initialBalance}`);
    }
  }

  // Static utility method
  private static generateAccountNumber(): string {
    return 'ACC' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  deposit(amount: number): boolean {
    if (amount <= 0) {
      console.log('❌ Deposit amount must be positive');
      return false;
    }
    this._balance += amount;
    this._addTransaction(`Deposit: +$${amount}`);
    console.log(`✅ Deposited $${amount}. New balance: $${this._balance}`);
    return true;
  }

  withdraw(amount: number): boolean {
    if (amount <= 0) {
      console.log('❌ Withdrawal amount must be positive');
      return false;
    }
    if (amount > this._balance) {
      console.log('❌ Insufficient funds');
      return false;
    }
    this._balance -= amount;
    this._addTransaction(`Withdrawal: -$${amount}`);
    console.log(`✅ Withdrew $${amount}. New balance: $${this._balance}`);
    return true;
  }

  get balance(): number {
    return this._balance;
  }

  get accountNumber(): string {
    return this.accountNumber;
  }

  get transactionHistory(): string[] {
    return [...this._transactionHistory];
  }

  protected _addTransaction(description: string): void {
    this._transactionHistory.push(`${new Date().toISOString()}: ${description}`);
  }
}

// 2. EXTENDED CLASS - SavingsAccount
class SavingsAccount extends BankAccount {
  private _interestRate: number;
  private readonly _minBalance: number = 100;

  constructor(ownerName: string, initialBalance: number, interestRate: number = 0.025) {
    super(ownerName, initialBalance);  // Call parent constructor
    this._interestRate = interestRate;
  }

  // Override withdraw with min balance check
  withdraw(amount: number): boolean {
    if (this._balance - amount < this._minBalance) {
      console.log(`❌ Cannot withdraw below minimum balance of $${this._minBalance}`);
      return false;
    }
    // Call parent's withdraw logic
    return super.withdraw(amount);
  }

  applyInterest(): void {
    const interest = this._balance * this._interestRate;
    this._balance += interest;
    this._addTransaction(`Interest applied: +$${interest.toFixed(2)} (${this._interestRate * 100}%)`);
    console.log(`💰 Interest applied: $${interest.toFixed(2)}. New balance: $${this._balance.toFixed(2)}`);
  }

  get interestRate(): number {
    return this._interestRate;
  }
}

// 3. SINGLETON CLASS - Bank
class Bank {
  private static _instance: Bank | null = null;
  private _accounts: Map<string, SavingsAccount> = new Map();

  private constructor() {
    console.log('🏦 Bank singleton initialized');
  }

  public static getInstance(): Bank {
    if (!Bank._instance) {
      Bank._instance = new Bank();
    }
    return Bank._instance;
  }

  createAccount(ownerName: string, initialBalance: number = 0): SavingsAccount {
    const account = new SavingsAccount(ownerName, initialBalance);
    this._accounts.set(account.accountNumber, account);
    
    console.log(`✅ Created account ${account.accountNumber} for ${ownerName}`);
    return account;
  }

  findAccount(accountNumber: string): SavingsAccount | null {
    return this._accounts.get(accountNumber) || null;
  }

  transfer(fromAccountNum: string, toAccountNum: string, amount: number): boolean {
    const fromAccount = this.findAccount(fromAccountNum);
    const toAccount = this.findAccount(toAccountNum);

    if (!fromAccount || !toAccount) {
      console.log('❌ One or both accounts not found');
      return false;
    }

    console.log(`💸 Transferring $${amount} from ${fromAccountNum} → ${toAccountNum}`);
    
    const success = fromAccount.withdraw(amount);
    if (success) {
      toAccount.deposit(amount);
      console.log('✅ Transfer completed');
      return true;
    }
    return false;
  }

  getAccountCount(): number {
    return this._accounts.size;
  }
}

const bank = Bank.getInstance();  // Singleton

// Create accounts
const alice = bank.createAccount('Alice', 1000);
const bob = bank.createAccount('Bob', 500);

console.log('\n=== DEPOSITS & WITHDRAWALS ===');
alice.deposit(200);      // ✅ 1200
bob.withdraw(100);       // ✅ 400

console.log('\n=== TRANSFER ===');
bank.transfer(alice.accountNumber, bob.accountNumber, 100);  // ✅ Alice:1100, Bob:500

console.log('\n=== INTEREST ===');
bob.applyInterest();     // ✅ Bob: 512.50 (2.5% interest)

console.log('\n=== SAVINGS MIN BALANCE ===');
bob.withdraw(450);       // ❌ Cannot go below $100

console.log('\n=== STATS ===');
console.log('Alice balance:', alice.balance);
console.log('Bob balance:', bob.balance);
console.log('Total accounts:', bank.getAccountCount());
console.log('Singleton test:', Bank.getInstance() === bank);  // true
