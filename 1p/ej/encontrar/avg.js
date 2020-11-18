let s = [3, 1, 4, 2, 3], suma = 0;

console.log('El promedio es: ', Promedio());

function Promedio(){
    for(i = 0; i < s.length; i++){
        suma += s[i];
    }
    return suma/s.length;
}
//complejidad = n
