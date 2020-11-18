let hora = 10, n = 1000;
//está en formato de 24 horas

console.log('En ',n, 'horas serán las', modular(),'horas');

function modular(){
    let sumahoras = n + hora;
    let modulo = sumahoras % 24;
    return modulo;
}