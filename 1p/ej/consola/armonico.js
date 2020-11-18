let armonico = 0, valor_i = 0;
let n = prompt('Introduce el valor de n: ')

for(let k = 1; k <= n; k++){
  valor_i = 1/k;
  armonico += valor_i;
  //console.log('El valor de la iteración es igual a: ',valor_i);
  console.log(armonico);
}
//La serie armónica diverge a infinito, es física acústica de kinder.
//console.log('La serie armónica es igual a: ', armonico);