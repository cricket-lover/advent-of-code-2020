const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").split("\n");
const entries = input.map(e=> +e)
  
const sumsUp = entries => {
    let product = 1;
    entries.forEach(entry => {
        const first = 2020 - entry;
        entries.forEach(element => {
            difference = first - element 
            if(entries.includes(difference)){
                product = entry * element * difference
           }
        })
    })

    return product;
}

console.log(entries)
const restult = sumsUp(entries);
console.log(restult)