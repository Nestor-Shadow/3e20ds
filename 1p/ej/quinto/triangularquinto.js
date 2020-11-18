let n = 5, anterior, nuevo = 0;

for(let j = 1; j <= n; j++){
    triangular(j);
}
console.log(nuevo);

function triangular(contador){
    for(let i = contador; i <= n; i++){
        if(i === 1){
            anterior = '1';
            return '1';
        }  
            nuevo = anterior.concat(i);
            anterior = nuevo;
            return nuevo;
    }
}