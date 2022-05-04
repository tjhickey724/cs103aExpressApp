class Rectangle(): 
    def __init__(self,a,b,c,d):
        self.a=a
        self.b=b
        self.c=c
        self.d=d
        
    def __str__(self):
        return "["+ "(" + str(self.a)+","+str(self.b)+")" + "," +"(" + str(self.c)+","+ str(self.d)+")""]"
    
    
    def intersect(self,other):
        return Rectangle((max(self.a,other.a)), (max(self.b,other.b)), (min(self.c,other.c)), (min(self.d,other.d)))
        
    def translate(self,r,s):
        return Rectangle(self.a+r, self.b+s, self.c+r, self.d+s)
