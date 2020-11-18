let hora = 10;
//está en formato de 24 horas

console.log('En ',2500, 'horas serán las', modular(),'horas');

function modular(){
    let sumahoras = 2500 + hora;
    let modulo = sumahoras % 24;
    return modulo;
}