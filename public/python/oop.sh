#!/Library/Frameworks/Python.framework/Versions/3.10/bin/python3
from rectangle import *
e=Rectangle(1,2,3,10)
f=Rectangle(0,3,6,8)
g=e.intersect(f)
e1 = e.translate(10,20)
f1 = f.translate(10,20)
h=e1.intersect(f1).translate(-10,-20)
print('e=',e)
print('f=',f)
print('g=',g)
print('e1=',e1)
print('f1=',f1)
print('h=',h)