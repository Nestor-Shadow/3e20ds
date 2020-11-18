let n = 5;

console.log(calcularfactorial(n));

function calcularfactorial(factorial){
    if(factorial === 0){
        return 1;
    }
    factorial = factorial*calcularfactorial(factorial-1);
    return factorial;
}