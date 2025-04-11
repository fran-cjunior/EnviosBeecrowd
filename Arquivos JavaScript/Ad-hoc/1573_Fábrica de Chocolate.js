let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split("\n")

for (let i = 0; i < (lines.length); i++) {
    const line = lines[i].split(' ')
        .map((e) => parseInt(e))
        .filter((e) => !isNaN(e))
    const [a, b, c] = line
    if((a===0) && (b===0) && (c===0)){break};
    console.log(parseInt((a*b*c)**(1/3)))
}