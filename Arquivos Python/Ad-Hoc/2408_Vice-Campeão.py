def achamaior(valores):
    maior = int(valores[0])
    index = 0
    
    for i in range(len(valores)):
        if int(valores[i]) > maior:
            maior = int(valores[i])
            index = i
            
    return index

v = input().split()
v.pop(achamaior(v))
print(v[achamaior(v)])


