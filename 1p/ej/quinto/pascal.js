let i = 0,factorial = 0, coeficientes = [];
let m = 4; //empieza desde 0

console.log(pascal());

function pascal(){
    for(let j = 0; j <= m; j++){
        coeficientes[j] = calcularfactorial(m)/(calcularfactorial(j)*calcularfactorial(m-j));
    }
    return coeficientes;
}

function calcularfactorial(n){
    let factorial = 1;
    if(n === 0){
        return 1;
    }
    else{        
        for(i = 1; i <= n; i++){
         factorial = i * factorial;
        }
        return factorial;
    }
}