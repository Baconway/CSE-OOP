import math

class Frac:
  def __init__(self, top, bottom):
    self.top = top
    
    if bottom == 0:
      raise Frac("Bottom cannot be 0")
    self.bottom = bottom
    pass
  
  def __str__(self) -> str:
    return f"{self.top} / {self.bottom}"
  
  def __add__(self, otherFrac : Frac) -> Frac:
    top = self.top * otherFrac.bottom + otherFrac.top * self.bottom
    bottom = self.bottom * otherFrac.bottom
    
    return Frac(top, bottom)
  
  def __sub__(self, otherFrac : Frac) -> Frac:
    top = self.top * otherFrac.bottom - otherFrac.top * self.bottom
    bottom = self.bottom * otherFrac.bottom
    
    return Frac(top, bottom)
  
  def __mul__(self, otherFrac : Frac) -> Frac:
    top = self.top * otherFrac.top
    bottom = self.bottom * otherFrac.bottom
    
    return Frac(top, bottom)
  
  def __truediv__(self, otherFrac : Frac) -> Frac:
    top = self.top * otherFrac.bottom
    bottom = self.bottom * otherFrac.top
    
    return Frac(top, bottom)
  
  def __eq__(self, otherFrac : Frac) -> bool:
    return (self.top / self.bottom) == (otherFrac.top / otherFrac.bottom) 
  
  def __lt__(self, otherFrac : Frac) -> bool:
    return (self.top / self.bottom) < (otherFrac.top / otherFrac.bottom) 
  
  def __gt__(self, otherFrac : Frac) -> bool:
    return (self.top / self.bottom) > (otherFrac.top / otherFrac.bottom) 
  
  def simplifyCheck(self) -> bool:
    return math.gcd(self.top, self.bottom) == 1
  
  def Simplify(self) -> bool:
    denominator = math.gcd(self.top, self.bottom)
    self.top //= denominator
    self.bottom //= denominator
    return True
  
a = Frac(1, 2)
b = Frac(1, 2)

c = a > b
print(c)