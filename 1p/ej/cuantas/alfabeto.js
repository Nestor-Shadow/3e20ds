let r = 8, n = 8, cantidad = 0;

if(r > n){
    console.log('r es mayor a n, no se puede calcular');
}
else{
    cantidad = calcularfactorial(n)/calcularfactorial(n-r)
    console.log(cantidad);
    
    function calcularfactorial(n){
        let factorial = 1
        for(let i = 1; i <= n; i++){
              factorial = i * factorial
        }
        return factorial
    }
}