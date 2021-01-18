class CircularDoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
const head = Symbol("head");
class CircularDoublyLinkedList {

    constructor() {
        this[head] = null;
    }

    add(data) {

        const newNode = new CircularDoublyLinkedListNode(data);

        // Si no hay ningun elemento procedemos a crear el nuevo nodo
        if (this[head] === null) {
            this[head] = newNode;
            newNode.next = newNode;
            newNode.previous = newNode;
        } else {        //Si ya tenemos algun elemento en el nodo

            const tail = this[head].previous;

            tail.next = newNode;
            newNode.previous = tail;
            newNode.next = this[head];
            this[head].previous = newNode;
        }
    }
}

const linkedList = new CircularDoublyLinkedList;  // creamos nuestra lista enlazada
linkedList.add(12);     //  Agregamos el valor 12 a la lista enlazada
linkedList.add('paco');     //  Agregamos el valor 'paco' a la lista enlazada
linkedList.add('rocio');    //  Agregamos el valor 'rocio' a la lista enlazada
console.log(linkedList);    // Imprimimos el nodo