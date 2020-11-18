let resultado, n1 = 0, n2 = 1;

console.log(fibonacci(5));

function fibonacci(n){
    if(n === 1){
        return n1;
    }
    if(n === 2){
        return n2;
    }
    else{
        for(let k = 1; k <= n-2; k++){
            resultado = n1 + n2;
            n1 = n2;
            n2 = resultado;
        }
        return resultado;
    }
}