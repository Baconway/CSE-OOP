from abc import ABC, abstractmethod

class InvalidAge():
  def __init__(self, msg):
    self.msg = msg
    pass
  
class InvalidTier():
  def __init__(self, msg):
    self.msg = msg
    pass

class Member(ABC):
  def __init__(self, name, age, gender, addr):
    self.name = name
    self.age = age
    self.gender = gender
    self.addr = addr
    pass
  
  @abstractmethod
  def describe(self):
    pass
  
  @property
  def age(self):
    return self.age
  
  @age.setter
  def age(self, value):
    if value <= 65 and value >= 18:
      self._age = value
    else: 
      raise InvalidAge('age inputted is invalid!')
  
  def __str__(self):
    return f'Member name: {self.name}, aged {self._age}, {self.gender}, lives at {self.addr}'
  
class Worker(Member):
  def __init__(self, name, age, gender, addr, tier):
    super().__init__(name, age, gender, addr)
    self.tier = tier
  
  def describe(self):
    print(f'Im a tier {self._tier} worker!')
  
  @property
  def tier(self):
    return self._tier
  
  @tier.setter
  def tier(self, value):
    if value >= 1 and value <= 10:
      self._tier = value
    else:
      raise InvalidTier('tier inputted is invalid')
    pass
  
class Architect(Member):
  def __init__(self, name, age, gender, addr, degree):
    super().__init__(name, age, gender, addr)
    self.degree = degree
  
  def describe(self):
    print(f'Im an architect working in the {self.degree} division!')

class Employee(Member):
  def __init__(self, name, age, gender, addr, work):
    super().__init__(name, age, gender, addr)
    self.work = work
    
  def describe(self):
    print(f'Im working in {self.work}!')

a = Worker('a', 20, 'm', 'hanoi', 5)
print(a)