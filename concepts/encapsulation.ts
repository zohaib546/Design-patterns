class Account {
  private balance: number = 0;

  public deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount > 0) this.balance -= amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

let account = new Account();
account.deposit(50);
account.withdraw(10);
console.log(account.getBalance());
