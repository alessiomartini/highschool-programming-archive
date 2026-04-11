def somma(a, b):
    return a + b

def moltiplica(a, b):
    return a * b

def sottrai(a, b):
    return a - b

def dividi(a, b):
    return a / b

def aplistint(list, a):
    a = int(a)
    list.append(a)

def addliststerms(list):
    cnt = len(list) - 1
    while cnt > 0:
        list[0] = list[0] + list[cnt]
        cnt = cnt - 1
    return list[0]
    
def removelement(lst, a):
    
    
'''
import math
x = 0
z = 0
sel = 0
lst = [0,1,1,1,1,1,1]

while sel != 7:
    x = float(input("Dimmi il primo termine:\n"))
    z = float(input("Dimmi il secondo termine:\n"))
    sel = int(input("1=somma\n2=moltiplicazione\n3=sottrazione\n4=dividi\n5=seno di x\n6=coseno di x\n7 per interrompere\n"))

    lst[1] = somma(x, z)
    lst[2] = moltiplica(x, z)
    lst[3] = sottrai(x, z)
    if z != 0:
        lst[4] = dividi(x, z)
    else:
        lst[4] = "impossibile"
    lst[5] = math.sin(x)
    lst[6] = math.cos(x)
    
    print(lst[sel])'''
    
lst = []
x = 1
while x != 0:
    x = int(input("num\n"))
    aplistint(lst, x)
print(addliststerms(lst))

'''
lst = [1,4,6]
cnt = len(lst) - 1
som = 0
while cnt > 0:
    som = som + lst[cnt]
    cnt = cnt - 1
print(som)'''

