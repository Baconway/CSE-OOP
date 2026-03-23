class Employee:
  def __init__(self, name, baseSalary, multiplier, maxSalary):
    self.__name = name
    self.__baseSalary = baseSalary
    self.multiplier = multiplier
    self.__maxSalary = maxSalary
    pass
  
  def get_EmployeeInfo(self):
    return f'Employee name: {self.__name}, starts at {self.baseSalary}, multiplied by {self.multiplier}, capping at {self.maxSalary}'
  
  def get_Salary(self):
    return self.baseSalary * self.multiplier
  
  def set_Multiplier(self, newMultiplier):
    canSet = (self.__baseSalary * newMultiplier) > self.__maxSalary
    
    if not canSet:
      self.multiplier = newMultiplier
      
    return not canSet
  
Test = Employee('hi', 100, 2, 500)

print(Test.set_Multiplier(6))