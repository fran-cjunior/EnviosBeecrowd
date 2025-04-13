# while True:
#     grandes, pilotos = map(int, input().split())
#     if grandes==pilotos==0:
#         break
#     l_gp = [input() for i in range(grandes)]
    
#     n_sis = int(input())    
#     for i in range(n_sis):
#         pontos = [0 for i in range(pilotos)]        
#         sis = input().split()
#         for j in range(grandes):
#             gp = l_gp[j].split()
#             for l in range(int(sis[0])):
#                 pontos[int(gp[l])-1] += int(sis[l+1])
    
#         print(pontos)
#         pontos.clear()
    
            
while True:
    grandes, pilotos = map(int, input().split())
    if grandes==pilotos==0:
        break
    
    l_gp = [input() for i in range(grandes)]
    n_sis = int(input())   
     
    for i in range(n_sis):
        pontos = [0 for i in range(pilotos)]        
        sis = input().split()
        
        for j in range(grandes):
            gp = l_gp[j].split()

            for l in range(pilotos):
                if int(gp[l]) <= int(sis[0]):
                    pontos[l] += int(sis[int(gp[l])])
        
        campeao = [i+1 for i, num in enumerate(pontos) if num == max(pontos)]
        resultado = " ".join(map(str, campeao))
        
        print(resultado)
        pontos.clear()    
                    