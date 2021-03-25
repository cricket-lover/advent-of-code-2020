const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").split("\n");
const entries = input.map(e=> +e)
  
const sumsUp = entries => {
    let product = 1;
    entries.forEach(entry => {
        const first = 2020 - entry;
        entries.forEach(second => {
           difference = first - second 
           if(entries.includes(difference)){

           }
        })
        if(entries.includes(first)){
            second = entry - first;
            if(entries.includes(second)){
                product  = entry * first * second;
            }
        }
    })

    return product;
}

console.log(entries, sumsUp(entries))