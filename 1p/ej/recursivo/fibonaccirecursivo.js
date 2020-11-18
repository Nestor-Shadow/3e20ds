let n = 10;// 0 cuenta como la primera posición

console.log(calcularfibonacci(n));

function calcularfibonacci(fibonacci){
    if(fibonacci === 1){
        return 0;
    }
    if(fibonacci === 2){
        return 1;
    }
    fibonacci = calcularfibonacci(fibonacci-1) + calcularfibonacci(fibonacci-2);
    return fibonacci;
}