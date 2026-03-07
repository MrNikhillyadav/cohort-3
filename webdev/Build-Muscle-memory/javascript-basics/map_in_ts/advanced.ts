class Bank {

  constructor() {
    this.accounts = new Map();  // accountNumber → SavingsAccount
  }

  createAccount(name, balance) {
    const account = new SavingsAccount(name, balance);
    this.accounts.set(account.accountNumber, account);  // String key
    return account;
  }

  findAccount(accountNumber) {
    return this.accounts.get(accountNumber);  // O(1) lookup!
  }

  getTotalBalance() {
    let total = 0;
    for (let account of this.accounts.values()) {
      total += account.balance;
    }
    return total;
  }
}

// VISUAL: Bank._accounts Map
// ACC123 → SavingsAccount { balance: 1000 }
// ACC456 → SavingsAccount { balance: 500  }
// ACC789 → SavingsAccount { balance: 2000 }
