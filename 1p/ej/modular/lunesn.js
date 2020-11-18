let dia = 1, dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
let n = 11
//Lunes está considerado como el primer día de la semana

console.log('En',n, 'días será', modular());

function modular(){
    let sumadias = n + dia - 1;
    let modulo = sumadias % 7;
    return dias[modulo];
}