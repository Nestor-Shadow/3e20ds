let n = 10, anterior;
let nuevo = [];

for(let j = 1; j <= n; j++){
    triangular(j);
}
console.log(nuevo);

function triangular(contador){
    for(let i = contador; i <= n; i++){
        if(i === 1){
            anterior = '1';
            nuevo[i-1] = '1';
            return '1';
        }  
            nuevo[i-1] = anterior.concat(i);
            anterior = nuevo[i-1];
            return;
    }
}