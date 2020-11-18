let x = Math.PI/2, seno = 0

//let a = Math.sin(Math.PI/2)
//console.log('El valor real es: ',a)

for(let k = 0; k <= 10; k++){
    calcularfactorial()
    let semi = Math.pow(-1,k)*(Math.pow(x,2*k+1)/calcularfactorial(2*k+1))
    seno += semi
    console.log(semi)
    //console.log('El valor de la suma en la iteración es: ',seno)
}
//console.log('El valor aproximado final es: ',seno)

function calcularfactorial(n){
    let factorial = 1
    for(let i = 1; i <= n; i++){
          factorial = i * factorial
    }
    return factorial
}
