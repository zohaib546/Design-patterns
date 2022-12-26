class User {
  // attributes
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  // methods
  public sayHello(): void {
    console.log("Hi, my name is " + this.name);
  }
}

let user: User = new User("Mosh");

// console.log(user.sayHello());

interface TaxCalculator {
  calculateTax: () => number;
}

class TaxCalculator2019 implements TaxCalculator {
  public calculateTax(): number {
    return 1;
  }
}

class TaxCalculator2020 implements TaxCalculator {
  public calculateTax(): number {
    return 2;
  }
}
