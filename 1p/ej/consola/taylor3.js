let seno = 0
let n = prompt('Ingresa el valor de n: ')
let x = prompt('Ingresa el valor de x: ')

//let a = Math.sin(x)
//console.log('El valor real es: ',a)

for(k = 0; k <= n; k++){
    calcularfactorial()
    semi = Math.pow(-1,k)*(Math.pow(x,2*k+1)/calcularfactorial(2*k+1))
    seno += semi
    console.log(semi)
    //console.log('El valor de la iteración es: ',seno)
}
//console.log('El valor aproximado final es: ',senovector)

function calcularfactorial(n){
    let factorial = 1
    for(i = 1; i <= n; i++){
          factorial = i * factorial
    }
    return factorial
}