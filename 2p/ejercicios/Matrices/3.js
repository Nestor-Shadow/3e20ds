let matriz =[[1,2,3],[4,5,6],[7,8,9]];
let num;
let nuevaMatriz=new Array(3);
console.log("Esta es la matriz: \n"+matriz)
num=validar(Number(prompt("columna deseada para salir: ")),matriz);

nuevaMatriz=sacarColumna(matriz,num);

console.log("Matriz con la columna fuera \n"+matriz);
console.log("columna que salio \n"+nuevaMatriz);

function validar(num,matriz){
    while (num>matriz.length || num<=0){
        console.log("El numero no es valido");
        num=Number(prompt("columna deseada para salir: "));
    }
    return num;
}

function sacarColumna(matriz,num){
    let nuevaMatriz=new Array(num);
    for(let i=0;i<matriz.length;i++){
        nuevaMatriz[i]=matriz[i][num-1];
        matriz[i][num-1]=undefined;
    }
    return nuevaMatriz;
}