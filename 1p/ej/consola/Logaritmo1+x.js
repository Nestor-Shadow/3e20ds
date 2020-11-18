let logaritmo = 0, valor_i = 0;
let x = prompt('Introduce x: ');
let n = prompt('Introduce el número de iteraciones: ')

for(let k = 1; k <= n; k++){
  valor_i = (Math.pow(x, k)*Math.pow(-1,k+1))/k;
  logaritmo += valor_i;
  console.log(logaritmo);
  //console.log('El valor de la iteración es: ',valor_i);
}

//Esta serie de Taylor solo funciona para -1 <= x <= 1, así que no tiene mucho senido leer x
//peeeero el problema lo pide, así que hágalo dentro de ese intervalo. 
//Por eso el console.log de abajo va a estar mal si lo descomenta cunado x no esté en ese intervalo.
//Como siempre dice que le dé referencias: Calculus one and several variables. 10th edition. por Sallas, Hille, Etgen. Capítulo 12.6 Taylor Series in X
//También puede preguntarle al Doctor en análisis armónico de fractales, Ricardo Sáenz de la facultad de ciencias. Él fue el que me dió ese tema
//console.log('Ln(1+x) es igual a: ', logaritmo);
