let factorial = 1, i = prompt()

calcularfactorial()

function calcularfactorial(){
    for(k = 1; k <= i; k++){
        factorial = k * factorial
        console.log(factorial)
    }
}