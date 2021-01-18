//Orozco Valdez Florencio Miguel 3°E
class Palindromo{
    constructor() {
        this.pali=[]
        this.top=0;
    }
    Poner(si){
        this.pali[this.top++] = si
    }
    Eliminar(){
        return this.pali[--this.top]
    }
    Tamaño(){
        return this.top;
    }
}

function palindromo(Nombre) {
    let pali = new Palindromo();
    let control ='';
    for (let i = 0; i < Nombre.length; i++) {
        pali.Poner(Nombre[i]);
    }
    while (pali.Tamaño() >0) {
        control += pali.Eliminar();
    }
    console.log(control)
    if (Nombre == control) {
        console.log(Nombre + ' Palíndromo ');
    }
    else {
        console.log(" No palíndromo ")
    }
}

let Nombre='ana'
palindromo(Nombre);
console.log('')
Nombre='Miguel'
palindromo(Nombre);
console.log('')
Nombre="Lencho"
palindromo(Nombre);