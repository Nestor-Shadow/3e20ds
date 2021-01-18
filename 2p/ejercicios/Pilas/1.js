function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}   // Funcion para crear la pila
function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top-1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

function mulBase(num, base) {   //   Funcion para convertir un numero de una base a otra
    let stack = new Stack();
    do {
        stack.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (stack.length() > 0) {
        converted += stack.pop();
    }
    return converted;
}
function validar(num){ //   Funcion para validar que no sea nulo
    while (num <= 0){
        console.log("El numero no es valido");
        num = Number(prompt("Escribe el numero que deseas transformar: "));
    }
    return num;
}

let num, base;
num = validar(Number(prompt("Escribe el numero que deseas transformar: ")));
base = validar(Number(prompt("Escribe la base a la que deseas transformar: ")));
console.log(num + " Convertido a la base " + base + " is " + mulBase(num, base));