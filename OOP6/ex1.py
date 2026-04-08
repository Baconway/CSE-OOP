from abc import ABC, abstractmethod

# Exceptions

idStore = []

class WrongPrice():
  def __init__(self, errorMSG):
    self.errorMSG = errorMSG
    pass
  
class OverlapID():
  def __init__(self, errorMSG):
    self.errorMSG = errorMSG
    pass

# Blueprint class
class Product(ABC):
  def __init__(self, id, ProductName, creator, price):
    self.__id = id
    self.__name = ProductName
    self.creator = creator
    self.price = price
    
  def __eq__(self, value):
    return self.id() == value.id()
      
  def __lt__(self, other):
    return self.price() < other.price
  @abstractmethod
  
  def Product_info(self):
    pass
  
  def Product_type(self):
    pass
  
  def __str__(self):
    return f'Product named {self.__name}, id {self.__id}, made by {self.creator}, costs {self.price}'
  
  @property
  def price(self):
    return self.price
  
  def price(self, value):
    if value <= 0:
      raise WrongPrice("Price inputted is invalid")
    self._price = value
  
  @property
  def id(self):
    return self.__id
  
  @property
  def name(self):
    return self.__name

class Electronics(Product):
  def __init__(self, id, ProductName, creator, price, warranty, voltage, power):
    super().__init__(id, ProductName, creator, price)
    self.warranty = warranty
    self.voltage = voltage
    self.power = power
  
  def Product_info(self):
    return f'This electronic has a voltage at {self.voltage}, uses {self.power} power, warranty until {self.warranty}'
  
  def Product_type(self):
    return 'Electronics'

class Ceramics(Product):
  def __init__(self, id, ProductName, creator, price, material):
    super().__init__(id, ProductName, creator, price)
    self.material = material
  
  def Product_info(self):
    return f'This piece of ceramic is made out of {self.material}.'
  
  def Product_type(self):
    return 'Ceramics'
  
class Perishables(Product):
  def __init__(self, id, ProductName, creator, price, dateMade, dateExpired):
    super().__init__(id, ProductName, creator, price)
    self.dateMade = dateMade
    self.dateExpired = dateExpired
  
  def Product_info(self):
    return  f'This perishable was made on {self.dateMade}, expires on {self.dateExpired}.'
  
  def Product_type(self):
    return 'Perishables'
  
a = Electronics(1, 2, 3, 4, 1, 2, 3)
print(a.Product_info())