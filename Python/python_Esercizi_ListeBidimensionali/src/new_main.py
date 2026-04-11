#!/usr/bin/env python3
#encoding: UTF-8

# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.

import funz

if __name__ == "__main__":
    lista = [[0,5,0],[0,5,0],[0,0,7],[0,10,0]]
    seconda = [[1,1,1],[1,1,1],[1,1,1]]
    
    print(funz.test_matrix(lista))
    print(funz.test_matrix(seconda))
    
    print(funz.test_prodotto_matrix(lista, seconda))
    
    print(funz.execute_prodotto_matrix(lista,seconda))
