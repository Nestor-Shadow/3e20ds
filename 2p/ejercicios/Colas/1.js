//Funciones para declarar la cola asi como otras funciones de esta mismas

function Queue() {  //  Definimos la cola
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {     //Definimos el metodo push para meter elemento a la cola
    this.dataStore.push(element);
}// Metodo para meter elementos a la cola

function dequeue() {
    let priority = this.dataStore[0].code;
    for (let i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}   //  Metodo para Sacar elementos de la cola en este caso por prioridad

function front() {  //Metodo que muestra el primer elemento de la cola
    return this.dataStore[0];
} //Metodo que muestra el primer elemento de la cola

function back() {   //Metodo que muestra el ultimo elemento
    return this.dataStore[this.dataStore.length-1];
}//Metodo que muestra el ultimo elemento

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}   // Metodo que muestra si la cola esta vacia o no

function Paciente(name, code) {
    this.name = name;
    this.code = code;
}   // Metodo que va registrando nuestros pacientes con el codigo de prioridad

function toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}   // Metodo para mostrar los elemento de la cola

let pac = new Paciente("Jorge",3);  //Registramos los pacientes
let emer = new Queue(); // Creamos una cola

emer.enqueue(pac);  // Comenzamos a meter a los pacientes a la cola
pac = new Paciente("Pepe", 4);
emer.enqueue(pac);
pac = new Paciente("Francisco", 2);
emer.enqueue(pac);
pac = new Paciente("Sergio", 1);
emer.enqueue(pac);
pac = new Paciente("Lucy", 1);
emer.enqueue(pac);

console.log(emer.toString());   // Mostramos los pacientes
let vistos = emer.dequeue();    // Sacamos con el metodo dequeque por prioridad de codigo y lo guardamos en vistos

console.log("Paciente que ha sido tratado: " + vistos[0].name); //Mostramos el paciente que sacamos por prioridad
console.log("Pacientes esperando a ser atendidos: ")        //Mostramos los pacientes que faltan de ser atendidos
console.log(emer.toString());

vistos = emer.dequeue();
console.log("Paciente que ha sido tratado: " + vistos[0].name);
console.log("Pacientes esperando a ser atendidos: ")
console.log(emer.toString());

vistos = emer.dequeue();
console.log("Paciente que ha sido tratado: " + vistos[0].name);
console.log("Pacientes esperando a ser atendidos: ")
console.log(emer.toString());
