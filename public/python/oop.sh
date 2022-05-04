
from polarcoordinates import *
a = PolarCoordinates(1,90)
b = PolarCoordinates(2,45)
c = a.mult(b).mult(b)
d = c.mult(c).mult(a)
print('a=',a)
print('b=',b)
print('c=',c)
print('d=',d)