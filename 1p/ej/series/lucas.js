let resultado, n1 = 2, n2 = 1
console.log(n1)
console.log(n2)
for(k = 1; k <= 10; k++){
    resultado = n1 + n2;
    n1 = n2;
    n2 = resultado;
    console.log(resultado)
}