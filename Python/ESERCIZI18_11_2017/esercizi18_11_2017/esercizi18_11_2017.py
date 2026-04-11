# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.

if __name__ == "__main__":
    
    '''     #pari o dispari in lista
    num = 1
    lst = []
    leng = 0
    
    while num != 0:
        num = int(input("NUMERO\n"))
        lst.append(num)
        
    leng = len(lst)
    print(lst)
    num = 0
    
    while num < leng:
        if (lst[num] % 2) == 0:
            print(lst[num], " è pari")
        else:
            print(lst[num], " è dispari")
        num = num + 1
        
    print("FINE")'''
    
    '''     #sommatoria, moltiplicatoria e media in lista
    num = 1
    lst = []
    leng = 0
    lng = 0
    somm = 0
    mlt = 1
    media = 0
    
    while num != 0:
        num = int(input("NUMERO\n"))
        lst.append(num)
        
    lst.remove(0)
    leng = len(lst)
        
    print(lst)
    num = 0

    while num < leng:
        somm = somm + lst[num]
        num = num + 1
    print("sommatoria: ", somm)
    
    num = 0
    
    while num < leng:
        mlt = mlt * lst[num]
        num = num + 1
    print("moltiplicatoria: ", mlt)
    
    media = somm / leng
    print("media aritmetica: ", media)'''
    
    '''
    # y = mx + q
    sp = " "
    y = 100
    m = int(input("M: "))
    x = 0
    q = int(input("Q: "))
    cnt = 0
    
    #if q < 0
    #ogni y sono m volte x
    
    while y >= cnt:
        
        print("|", (2 * sp * m * y), "*", sp * (100 - y))
        
        y = y - 1
    if q > 0:
        while q != 0:
            print("  " * 100)
            q = q - 1
    print("__" * 130)'''
    
    # y = mx + q
    
    y = 0
    m = int(input("M: "))
    x = 0
    q = int(input("Q: "))
    xlist = []
    ylist = []
    
    while x < 10:
        
        xlist.append(x)
        
        y = m * x + q
        ylist.append(y)
        print("X:", x, "   ---    Y:", y)
        
        x = x + 1
    print("X: ", xlist)
    print("Y: ", ylist)
    
     #if x > 0:
        
    #if q < 0
    #ogni y sono m volte x
    '''
    while y >= cnt:
        
        print("|", (2 * sp * m * y), "*", sp * (100 - y))
        
        y = y - 1
    if q > 0:
        while q != 0:
            print("  " * 100)
            q = q - 1
    print("__" * 130)'''