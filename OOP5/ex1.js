class Product {
  constructor(id, ProductName, creator, price) {
    this.id = id;
    this.ProductName = ProductName;
    this.creator = creator;
    this.price = price;
  }

  get ProductInfo() {
    return `Product ID${this.id}, named ${this.ProductName} by ${this.creator} costs ${this.price}.`;
  }
}

class Electronics extends Product {
  constructor(id, ProductName, creator, price, warranty, voltage, power) {
    super(id, ProductName, creator, price);
    this.warranty = warranty;
    this.voltage = voltage;
    this.power = power;
  }

  get ElectronicsInfo() {
    console.log(
      this.ProductInfo +
        ` This electronic has a voltage at ${this.voltage}, uses ${this.power} power, warranty until ${this.warranty}`,
    );
  }
}

class Ceramics extends Product {
  constructor(id, ProductName, creator, price, material) {
    super(id, ProductName, creator, price);
    this.material = material;
  }

  get CeramicsInfo() {
    console.log(
      this.ProductInfo +
        ` This piece of ceramic is made out of ${this.material}.`,
    );
  }
}

class Perishables extends Product {
  constructor(id, ProductName, creator, price, dateMade, dateExpired) {
    super(id, ProductName, creator, price);
    this.dateMade = dateMade;
    this.dateExpired = dateExpired;
  }

  get PerishablesInfo() {
    console.log(
      this.ProductInfo +
        ` This perishable was made on ${this.dateMade}, expires on ${this.dateExpired}.`,
    );
  }
}

// THIS WAS AI GENNED, SHIT COULD BE WRONG
const product = new Product(1, "Generic Item", "Unknown", 9.99);
console.log(product.ProductInfo);

const electronics = new Electronics(
  2,
  "Laptop",
  "TechCorp",
  999.99,
  "2027-03-26",
  220,
  "65W",
);
electronics.ElectronicsInfo;

const ceramics = new Ceramics(3, "Vase", "ArtStudio", 149.99, "Porcelain");
ceramics.CeramicsInfo;

const perishables = new Perishables(
  4,
  "Milk",
  "Dairy Farm",
  3.99,
  "2026-03-20",
  "2026-04-20",
);
perishables.PerishablesInfo;
