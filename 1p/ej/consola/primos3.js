let i, j = 2, k = 1;
let n = prompt('Introduce la cantidad de primos');

do{
  let l = 0;
    for(i = 1; i <= j; i++){
        if(j%i === 0){
            l++;
        }
    }
    if(l <= 2){
        console.log(j);
        k++;
      }
      j++;
} while(k <= n);