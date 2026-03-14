class Employee {
  constructor(name, baseSalary, scale, maxSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.maxSalary = maxSalary;
    this.scale = scale;
  }

  get calcSalary() {
    return this.baseSalary * this.scale;
  }

  get EmployeeInfo() {
    return `Employee name is ${this.name}, with a starting salary of $${this.baseSalary} scaled by $${this.scale}, maximum salary of $${this.maxSalary}`;
  }

  set ChangeSalary(proposedSalary) {
    if (proposedSalary > this.maxSalary) {
      console.error("Proposed salary is over employee maximum");
      return false;
    } else {
      this.baseSalary = proposedSalary;
      console.log("Salary change successful!");
      return true;
    }
  }
}

Mike = new Employee("Mike", 100, 1.5, 1000);
