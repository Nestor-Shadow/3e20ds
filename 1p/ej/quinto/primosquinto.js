let k = 1, i, j = 2;

console.log(primos(5));

function primos(n){
    do{
        let l = 0;
          for(i = 1; i <= j; i++){
              if(j%i === 0){
                  l++;
              }
          }
          if(l <= 2){
              primo = j;
              k++;
            }
            j++;
      } while(k <= n);
      return primo;    
}