// Inheritence Implementation

class Employee {
  constructor(id, name, dob, sex, addr, multiplier) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.sex = sex;
    this.addr = addr;
    this.multiplier = multiplier;
  }
}

class PartTime extends Employee {
  constructor(id, name, dob, sex, addr, multiplier, contractLen, bonus) {
    super(id, name, dob, sex, addr, multiplier);
    this.contractLen = contractLen;
    this.bonus = bonus;
  }
}

class FullTime extends Employee {
  constructor(id, name, dob, sex, addr, multiplier, position) {
    super(id, name, dob, sex, addr, multiplier);
    this.position = position;
  }
}
class Manager extends Employee {
  constructor(id, name, dob, sex, addr, multiplier, startDate, bonus) {
    super(id, name, dob, sex, addr, multiplier);
    this.startDate = startDate;
    this.bonus = bonus;
  }
}
