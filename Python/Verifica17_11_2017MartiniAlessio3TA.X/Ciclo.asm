    ;CICLO MARTINI ALESSIO 3TA (versione minima)
    UDATA_ACS
    
num res 1
cnt res 1
 
    CODE 0
    clrf num
azzera	
    movlw 0x05
    
ripeti
    
    decf num
    bz azzera
    bnz ripeti
	
    sleep
    END
    


