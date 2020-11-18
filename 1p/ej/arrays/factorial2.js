let factorial = [1]
calcularfactorial()

function calcularfactorial(){
    for(k = 1; k <= 9; k++){
        factorial[k] = k * factorial[k-1]
    }
}

console.log(factorial)