let dia = 1, dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
//Lunes está considerado como el primer día de la semana

console.log('En 11 días será', modular());

function modular(){
    let sumadias = 11 + dia - 1;
    let modulo = sumadias % 7;
    return dias[modulo];
}