// Composition Implementation
class Worker {
  constructor(employeeLevel) {
    this.employeeLevel = employeeLevel;
  }
}

class Engineer {
  constructor(Degree) {
    this.Degree = Degree;
  }
}

class Employee {
  constructor(work) {
    this.work = work;
  }
}

class Member {
  constructor(name, age, sex, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.sex = sex;
  }

  set MemberRanking(rank) {
    this.rank = rank;
  }
}

function AddMember() {}
function findMember() {}
function getInfo() {}
function ExitManagement() {}

function InitManagement() {}

InitManagement();
