let factorial = 1

calcularfactorial()

function calcularfactorial(){
    for(k = 1; k <= 10; k++){
        factorial = k * factorial
        console.log(factorial)
    }
}