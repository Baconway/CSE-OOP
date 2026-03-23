class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y
    
    print(x, y)
    pass

class Line:
  def __init__(self, p1=Point(8, 5), p2=Point(1, 0)):
    self.__p1 = p1
    self.__p2 = p2
    pass

  @classmethod
  def preset_line(self, p1, p2):
    return Line(p1, p2)
  
  @classmethod
  def createFromScratch(self, x1, y1, x2, y2):
    return Line(Point(x1, y1), Point(x2, y2))
  
  @classmethod
  def copyLine(self, lineToCopy):
    return lineToCopy
  
Test = Line()
Test2 = Line.preset_line(Point(1, 2), Point(5, 6))
Test3 = Line.createFromScratch(1, 2, 3, 4)
Test4 = Line.copyLine(Test)
