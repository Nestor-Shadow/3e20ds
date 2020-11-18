let i;

console.log(calcularfactorial(5));

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