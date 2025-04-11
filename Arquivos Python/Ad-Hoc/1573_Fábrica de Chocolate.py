
while True:
    a, b, c = map(int, input().split())
    if a==b==c==0:
        break
    volume = a*b*c
    aresta_cubo = volume ** (1/3) #Raiz cubica
    print(int(aresta_cubo))