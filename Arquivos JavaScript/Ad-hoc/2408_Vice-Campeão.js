function achaMaior(p){
    let maior = p[0];
    let index = 0
    for (let i = 0; i < p.length; i++){
        if(p[i] > maior){
            maior = p[i]
            index = i
        }
    }
    return index
}

let input = require("fs").readFileSync("stdin", "utf8");
let positions = input.split(" ")
    .map((e) => parseInt(e))
    .filter((e) => !isNaN(e)) // ISSO REMOVE TODOS OS NAN

positions.splice(achaMaior(positions), 1)
console.log(positions[achaMaior(positions)])