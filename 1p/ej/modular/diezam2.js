let hora = 10;
//está en formato de 24 horas

console.log('Hace ', 2500, 'horas, fueron las ', modular(hora),'horas');

function modular(hours){
    let menoshoras = 2500 % 24;
    if(menoshoras > hours){
        let sumahoras = 24 + hours - menoshoras;
        return sumahoras;       
    }
    let sumahoras = hours - menoshoras;
    return sumahoras;
}