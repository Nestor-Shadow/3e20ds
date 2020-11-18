let k = 0, i, j = 2;
let x = [];

do{
  let l = 0;
    for(i = 1; i <= j; i++){
        if(j%i === 0){
            l++;
        }
    }
    if(l <= 2){
        x[k] = j;
        k++;
      }
      j++;
} while(k <= 9);
console.log(x);