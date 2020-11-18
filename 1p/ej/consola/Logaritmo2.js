let logaritmo = 0, valor_i = 0;
let n = prompt('Introduce el valor de n: ')

for(let k = 1; k <= n; k++){
  valor_i = Math.pow(-1,k+1)/k;
  logaritmo += valor_i;
  console.log(valor_i);
}
//console.log('Ln(2) es igual a: ', logaritmo);