''' Rectangle class for Exam 12 problem on python classes'''


class Rectangle():
    def __init__(self,a,b,c,d):
        self.a=a
        self.b=b
        self.c=c 
        self.d=d

    def intersect(self,other):
        a1 = max(self.a,other.a)
        b1 = max(self.b,other.b)
        c1 = min(self.c,other.c)
        d1 = min(self.d,other.d)
        return Rectangle(a1,b1,c1,d1)
    
    def translate(self,x,y):
        return Rectangle(self.a+x,self.b+y,self.c+x, self.d+y)

    def __str__(self):
        return ("[(%d,%d),(%d,%d)]"%(self.a,self.b,self.c,self.d))
