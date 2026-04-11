;MARTINI ALESSIO SOMMA DI DUE VARIABILI (versione avanzata)
    
    
UDATA 
    num res 1
    add res 1
    somma res 2
 
CODE  0
    BANKSEL num
    movlb 2		    ;scelgo il banco dove salvare (2) fileregister address:200
    movlw 0x02		    ;mettere valori nelle due variabili
    movwf num,1
    movlw 0xFF
    movwf add,1
    
    movf num,w
    addwf add,w
    
 
    BANKSEL somma
    movlb 1		    ;;scelgo il banco dove salvare (2) fileregister address:100
    movwf somma,1
    movlw 0
    clrf somma+1
    addwfc somma+1,F
    
    sleep
END
    

