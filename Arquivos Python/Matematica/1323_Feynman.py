while True:
    dim = int(input())
    if dim == 0:
        break
    cont = 0
    for i in range(dim):
        cont += (i+1) * (i+1)
    cont+1
    print(cont)