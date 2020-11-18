let n = 10, anterior;

for(let j = 1; j <= n; j++){
    console.log(triangular(j));
}

function triangular(contador){
    for(let i = contador; i <= n; i++){
        if(i === 1){
            anterior = '1';
            return '1';
        }  
            let nuevo = anterior.concat(i);
            anterior = nuevo;
            return nuevo;
    }
}