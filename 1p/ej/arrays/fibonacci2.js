let n1 = 0, n2 = 1
var resultado = []
resultado[0] = n1
resultado[1] = n2

for(let k = 2; k <= 9; k++){
    resultado[k] = n1 + n2;
    n1 = n2;
    n2 = resultado[k];
}
    console.log(resultado)