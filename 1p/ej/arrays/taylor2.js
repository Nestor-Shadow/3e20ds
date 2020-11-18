let x = Math.PI/2, seno = 0, senovector = [] 

//let a = Math.sin(Math.PI/2)
//console.log('El valor real es: ',a)

for(k = 0; k <= 10; k++){
    calcularfactorial()
    semi = Math.pow(-1,k)*(Math.pow(x,2*k+1)/calcularfactorial(2*k+1))
    seno += semi
    senovector[k] = seno
    console.log('El valor de la iteración es: ',senovector[k])
}
//console.log('El valor aproximado final es: ',senovector)

function calcularfactorial(n){
    let factorial = 1
    for(i = 1; i <= n; i++){
          factorial = i * factorial
    }
    return factorial
}