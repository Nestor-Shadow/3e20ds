let resultado = [], n1 = 2, n2 = 1
resultado[0] = n1
resultado[1] = n2

for(k = 2; k <= 9; k++){
    resultado[k] = n1 + n2;
    n1 = n2;
    n2 = resultado[k];
}
console.log(resultado)