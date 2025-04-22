let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split("\n")

let cont = 0
while (true){
    let [grandes, pilotos] = lines[cont].split(" ").map((e) => parseInt(e)).filter((e) => !isNaN(e))
    if ((grandes == 0) && (pilotos ==0)) {
        break
    }
    let l_gp = []
    for (let i = 0; i < grandes; i++){
        cont++
        l_gp.push(lines[cont].split(" ").map((e) => parseInt(e)).filter((e) => !isNaN(e)))
    }
    cont++
    let n_sis = parseInt(lines[cont])
    
    for (let i = 0; i < n_sis; i++){
        cont++
        let pontos = Array(pilotos).fill(0)
        let sis = lines[cont].split(" ").map((e) => parseInt(e)).filter((e) => !isNaN(e))
        
        for (let j = 0; j < grandes; j++){
            let gp = l_gp[j]
    
            for (let l = 0; l < pilotos; l++){
                if (gp[l] <= sis[0]){
                    pontos[l] += sis[gp[l]]
                }
            }
        }
        let maior = Math.max(...pontos)

        let capeao = pontos.map((valor, i) => valor === maior ? i+1 : -1).filter(i => i !== -1)
        let resultado = capeao.join(" ")
        console.log(resultado)
        pontos = []
    }
cont++
}
