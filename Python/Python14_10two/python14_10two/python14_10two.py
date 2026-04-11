# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.

if __name__ == "__main__":
    '''
    k = 1
    while k == 1:'''
        
    '''
        x = int(input("scrivi il primo numero\n"))
        z = int(input("scrivi il secondo numero\n"))
    
        if x < z:
            print("il secondo numero:", z, "è maggiore del primo numero:", x)
        elif z < x:
            print("il primo numero:", x, "è maggiore del secondo numero:", z)
        else:
            print("i numeri sono uguali")
        '''
    '''        
        a = int(input("primo numero\n"))   
        b = int(input("secondo numero\n"))   
        c = int(input("terzo numero\n")) 
        
        if a > b and a > c:
            print(a, ", il primo numero è maggiore")
        elif b > a and b > c:
            print(b, ", il secondo numero è maggiore")
        elif c > a and c > b:
            print(c, ", il terzo numero è maggiore")
        elif (a == b) > c:
            print("il primo e il secondo numero sono uguali e maggiori")
        elif (a == c) > b:
            print("il primo e il terzo numero sono uguali e maggiori")
        elif (b == c) > a:
            print("il secondo e il terzo numero sono uguali e maggiori")
        else:
            print("ci sono tre numeri uguali")
        '''
    '''            
    q = int(input("inserisci un numero\n"))
            
    if (q % 2) == 0:
        print("il numero", q, "è pari")
    elif (q % 2) == 1:
        print("il numero", q, "è dispari")
    else:
        print("il numero non è intero")
    '''
    '''    
    k = int(input("se premi 1 si ripete, se premi un'altro numero si interrompe il ciclo\n"))
    exit("è finito il programma")
    '''
   
    w = int(input("Scrivi un anno\n"))
    
    if (w % 100) == 0 and (w % 400) == 0:
        print("è bisestile")
    elif (w % 100) != 0 and (w % 4) == 0:
        print("è bisestile")
    else:
        print("non è bisestile")