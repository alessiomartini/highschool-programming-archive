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


    
def removelement(lst, a):
    list.remove(a)
    
def removelementindex(lst, a):
    del list[a]

def addliststerms(list):
    cnt = len(list) - 1
    while cnt > 0:
        list[0] = list[0] + list[cnt]
        cnt = cnt - 1
    return list[0]

oper = 10
while oper != 0:
    oper = int(input("scegli operazione da 1 a 8:\n"))
    
    if oper > 0 and oper < 7:
        a = int(input("primo valore:\n"))
        
        if oper > 5:
            b = int(input("secondo valore:\n"))
            
            if oper == 1:
                
