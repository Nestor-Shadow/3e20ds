let x = [], min = 0, max = 999999, cantidad = 10, z = 0, p =6, inversiones, totalinversiones = 0;

//Use 6 veces la función para calcular los promedios
for(let k = 0; k < p; k++){
    random();
    let v = new Date().getTime();
    console.log(burbuja());
    let y = new Date().getTime();
    z += y-v;   
    totalinversiones += inversiones;    
}

console.log('La cantidad de inversiones promedio son: ',totalinversiones/p);
console.log('El promedio de tiempo de ejecución es de: ',z/6,'milisegundos');
console.log('¿Se puede mejorar el tiempo de ejecución? Sí, usando otro método de ordenamiento xD');

function cambiar(n, m){
    let temp = x[n];
    x[n] = x[m];
    x[m] = temp;
}

function burbuja(){
    inversiones = 0
    for(let i = 0; i < cantidad; i++){
        for(let j = 0; j < cantidad-1; j++){
            if(x[j] > x[j+1]){
                cambiar(j, j+1);
                inversiones++
            }
            else continue;
        }
    }
    return x;
}

function random(){
    for (k = 0; k < cantidad; k++){
        x[k] = Math.floor(Math.random() * max + min);
    }
    return x;
}