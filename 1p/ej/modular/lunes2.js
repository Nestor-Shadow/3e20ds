let dia = 1, dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
//Lunes está considerado como el primer día de la semana

console.log('Hace 11 días fué', modular());

function modular(){
    let menosdias = 11 % 7;
    if(menosdias >= dia){
        let sumadias = 7 + dia - menosdias -1;
        return dias[sumadias];       
    }
    let sumadias = dia - menosdias - 1;
    return dias[sumadias];
}