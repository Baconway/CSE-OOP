// Composition Implementation
class Member {
  constructor(name, age, sex, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.sex = sex;
  }

  get Info() {
    console.log(this.name, this.age, this.sex, this.addr);
  }
}

class MemberWorker {
  constructor(employeeLevel, name, age, sex, addr) {
    this.employeeLevel = employeeLevel;
    this.details = new Member(name, age, sex, addr);
  }

  get Info2() {
    this.details.Info();
    console.log(this.employeeLevel);
  }
}

class Engineer {
  constructor(Degree, name, age, sex, addr) {
    this.Degree = Degree;
    this.details = new Member(name, age, sex, addr);
  }

  get Info2() {
    this.details.Info();
    console.log(this.Degree);
  }
}

class Employee {
  constructor(work, name, age, sex, addr) {
    this.work = work;
    this.details = new Member(name, age, sex, addr);
  }

  get Info2() {
    this.details.Info();
    console.log(this.work);
  }
}

class ManagementProgram {
  MemberHolder = [];

  AddMember(memberRank) {
    switch (memberRank) {
      case "Worker":
        this.MemberHolder.push(new MemberWorker(1, "a", 20, "fem", "hanoi"));
        break;
      case "Engineer":
        this.MemberHolder.push(new Engineer("N", "a", 20, "fem", "hanoi"));
        break;
      case "Employee":
        this.MemberHolder.push(
          new Employee("Accountant", "a", 20, "fem", "hanoi"),
        );
        break;
      default:
        console.log("no rank exists");
        break;
    }
  }

  findMember(memName) {
    this.MemberHolder.forEach((mem) => {
      if (mem.details.name == memName) {
        return mem;
      }
    });
  }

  getInfo() {
    this.MemberHolder.forEach((mem) => {
      mem.Info2();
    });
  }
}
