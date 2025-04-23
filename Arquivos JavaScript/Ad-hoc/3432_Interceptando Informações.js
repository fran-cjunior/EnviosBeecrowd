let input = require('fs').readFileSync('stdin', 'utf8');
let a = input.split(" ")
if(a.includes("9")){
    console.log("F")
}
else{
    console.log("S")
}