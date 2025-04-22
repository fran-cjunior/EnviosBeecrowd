let input = require('fs').readFileSync('stdin', 'utf8')
let os = 0
for (let i of input){
    if (i === "O"){
        os++
    }
}if (os != 1){
    console.log("?")
}else if (input.includes("XX")){
    console.log("Alice")
}else{
    console.log("*")
}

