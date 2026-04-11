# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.

if __name__ == "__main__":
    '''
    line = 1
    a = 1
    n = int(input("Numero\n"))
    
    while line <= n:
        
        while a <= (n+line):
            
            print(a)
            a = a + 1
            
        line = line + 1
        a = line
        print("\n")'''
        
    '''
    scat = int(input("Numero di scatti telefonici\n"))
    base = 2.5
    tax = 0
    
    if scat != 0:
        if scat > 100:
            
            tax = 30 * 0.2 + 70 * 0.5
            scat = scat - 100
            tax = tax + scat * 0.15
    
        elif scat <= 100 and scat > 30:
            tax = 30 * 0.2
            scat = scat - 30
            tax = tax + scat * 0.5
    
        elif scat <= 30:
            tax = tax + scat * 0.2
            
    print(tax + base)'''
    
    '''
    esp = -1
    dec = 0
    bit = int(input("primo bit da sinistra\n"))
    
    while bit > -1 and bit < 2:
        
        esp = esp + 1
        dec = dec + (bit * (2 ** esp))
        bit = int(input("Dimmi un bit alla volta in ordine da sinistra\n"))
        
        
    print(dec)'''
    
    byte = []
    dec = int(input("Dimmi un numero decimale\n"))
    
    while dec > 0:
        
        if (dec % 2) == 1:
            dec = (dec / 2) - 0.5
            byte.append(1)
            
        elif (dec % 2) == 0:
            dec = dec / 2
            byte.append(0)
            
    byte.reverse()
    print(byte)
    