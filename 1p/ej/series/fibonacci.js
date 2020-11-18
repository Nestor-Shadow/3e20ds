let resultado, n1 = 0, n2 = 1

fibonacci()

function fibonacci(){
    for(let k = 0; k < 10; k++){
        if(k === 0){
            console.log(0);
            continue;
        }
        if(k === 1){
            console.log(0);
            continue;
        }
        resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;
        console.log(resultado);
    }
}