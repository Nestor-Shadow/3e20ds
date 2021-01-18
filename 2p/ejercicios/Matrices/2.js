let matriz =[[1,1,1],[2,2,2],[3,3,3]];
console.log("Esta es la matriz: \n"+matriz);
matriz = matriz[0].map((_, colIndex) => matriz.map(row => row[colIndex]));
console.log("Esta es la matriz Transpuesta: \n"+matriz);
