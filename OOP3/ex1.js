class Dog {
  constructor(name, color, species, personality) {
    this.name = name;
    this.color = color;
    this.species = species;
    this.personality = personality;
  }

  bark() {
    console.log("Woof!");
  }
  wag_tail() {
    console.log(`${this.name} is wagging its tail`);
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class Car {
  constructor(brand, color, size, price) {
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.price = price;
  }

  accelerate() {
    console.log("This car is accelerating!");
  }
  decelerate() {
    console.log("This car is decelerating!");
  }
  crash() {
    console.log("your fault for going too fast");
  }
}

class BankAccount {
  constructor(name, id, bank, balance) {
    this.name = name;
    this.id = id;
    this.bank = bank;
    this.balance = balance;
  }

  send(amount, id) {
    console.log(`sending $${amount} to ${id}`);
  }
  withdraw(amount) {
    console.log(`withdrawing $${amount} from your account`);
  }
  check_balance() {
    console.log(`this account has $${amount} left`);
  }
}

myDog = new Dog("Dog", "Black", "German Sheperd", "Sleepy");
myCar = new Car("Ford", "Red", "Pickup", "$35000");
myAccount = new BankAccount("Bway", "667776727", "Chase", "$500");
