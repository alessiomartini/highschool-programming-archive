def test_matrix(listaB):
    '''Controlla se una lista bidimensionale è una matrice'''
    for liste in listaB:
        if len(liste) == len(listaB[0]):
            continue
        else:
            return 'False'
    return 'True'
def test_prodotto_matrix(listaA, listaB):
    '''Controlla se si può calcolare il prodotto fra due matrici'''
    if test_matrix(listaA) == "True" and test_matrix(listaB) == "True":
        if len(listaA[0]) == len(listaB):
            return "True"
        else:
            return "False"
    else:
        return "Matrixs input INVALID!"
def newlist_matrixcolumn(matrix, column):
    '''Crea una lista con i valori della colonna di una MATRICE'''
    lista = []
    for line in range(len(matrix)):
        lista.append(matrix[column][line])
    return lista
def execute_prodotto_lista(listaA, listaB):
    '''Calcola prodotto tra una lista e un'altra lista'''
    if len(listaA) == len(listaB):
        prod = 0
        for n in range(len(listaA)):
            prod = prod + listaA[n]*listaB[n]
        return prod
    else:
        return 'INVALID list input'
def execute_prodotto_matrix(listaA, listaB):
    '''Calcola prodotto tra MATRICI'''
    if test_prodotto_matrix(listaA, listaB) == 'True':
        matrice = []
        for line in range(len(listaA)):
            matrice.append([])
            for column in range(len(listaB[0])):
                matrice[line].append(execute_prodotto_lista(listaA[line], newlist_matrixcolumn(listaB, column)))
        return matrice
    else:
        return 'Input ERROR'
