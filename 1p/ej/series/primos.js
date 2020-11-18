let k = 1, i, j = 2;
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
} while(k <= 10);