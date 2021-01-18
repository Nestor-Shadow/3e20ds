class Node{
    constructor(informacion){
        this.informacion = informacion;
        this.hijo = [];
    }

}   //Funcion para crear el nodo

class Arbol{        //  Clase para crear el arbol
    constructor() {
        this.raiz = null;
    }
}
Arbol.prototype.add = function(informacion, infoDelNode) {
    let node = new Node(informacion);
    let padre = infoDelNode ? this.findBFS(infoDelNode) : null;
    if(padre) {
        padre.hijo.push(node);
    } else {
        if(!this.raiz) {
            this.raiz = node;
        } else {
            return 'La raiz del nodo ya ha sido asignada';
        }
    }
};//  Funcion para agregar elementos al arbol

Arbol.prototype.remove = function(informacion) {
    if(this.raiz.informacion === informacion) {
        this.raiz = null;
    }

    let cola = [this.raiz];
    while(cola.length) {
        let node = cola.shift();
        for(let i = 0; i < node.hijo.length; i++) {
            if(node.hijo[i].informacion === informacion) {
                node.hijo.splice(i, 1);
            } else {
                cola.push(node.hijo[i]);
            }
        }
    }
};  //  Funcion para remover elementos del arbol

Arbol.prototype.contains = function(informacion) {
    return this.findBFS(informacion) ? true : false;
};  //  Funcion para buscar elementos

Arbol.prototype.findBFS = function(informacion) {
    let cola = [this.raiz];
    while(cola.length) {
        let node = cola.shift();
        if(node.informacion === informacion) {
            return node;
        }
        for(let i = 0; i < node.hijo.length; i++) {
            cola.push(node.hijo[i]);
        }
    }
    return null;
};  //  Funcion de busqueda en amplitud

Arbol.prototype._preOrder = function(node, fn) {
    if(node) {
        if(fn) {
            fn(node);
        }
        for(let i = 0; i < node.hijo.length; i++) {
            this._preOrder(node.hijo[i], fn);
        }
    }
};  // Funcion para recorrer el arbol en preorder

Arbol.prototype._postOrder = function(node, fn) {
    if(node) {
        for(let i = 0; i < node.hijo.length; i++) {
            this._postOrder(node.hijo[i], fn);
        }
        if(fn) {
            fn(node);
        }
    }
};  // Funcion para recorrer el arbol en postorder

Arbol.prototype.traverseDFS = function(fn, method) {
    let reciente = this.raiz;
    if(method) {
        this['_' + method](reciente, fn);
    } else {
        this._preOrder(reciente, fn);
    }
};  // Funcion para recorrer en profundidad el arbol

Arbol.prototype.traverseBFS = function(fn) {
    let cola = [this.raiz];
    while(cola.length) {
        let node = cola.shift();
        if(fn) {
            fn(node);
        }
        for(let i = 0; i < node.hijo.length; i++) {
            cola.push(node.hijo[i]);
        }
    }
};      // Funcion para recorrer en amplitud el arbol

Arbol.prototype.print = function() {
    if(!this.raiz) {
        return console.log('Cola del nodo no encontrada');
    }
    let nuevaLinea = new Node('|');
    let cola = [this.raiz, nuevaLinea];
    let cadena = '';
    while(cola.length) {
        let node = cola.shift();
        cadena += node.informacion.toString() + ' ';
        if(node === nuevaLinea && cola.length) {
            cola.push(nuevaLinea);
        }
        for(let i = 0; i < node.hijo.length; i++) {
            cola.push(node.hijo[i]);
        }
    }
    console.log(cadena.slice(0, -2).trim());
};  //  Funcion para pintar el arbol

Arbol.prototype.printByLevel = function() {
    if(!this.raiz) {
        return console.log('Nodo raiz no encontrado');
    }
    let nuevaLineas = new Node('\n');
    let cola = [this.raiz, nuevaLineas];
    let cadena = '';
    while(cola.length) {
        let node = cola.shift();
        cadena += node.informacion.toString() + (node.informacion !== '\n' ? ' ' : '');
        if(node === nuevaLineas && cola.length) {
            cola.push(nuevaLineas);
        }
        for(let i = 0; i < node.hijo.length; i++) {
            cola.push(node.hijo[i]);
        }
    }
    console.log(cadena.trim());
};  // Funcion para pintar los nodos del arbol por nivel

let tree = new Arbol();     // Declaramos nuestro arbol

tree.add('Francisco');  // Agregamos nodos al arbol
tree.add('Florencio', 'Francisco'); // Agregamos nodo al arbol con su respectivo hijo
tree.add('Miguel', 'Florencio');
tree.add('Orozco', 'Florencio');
tree.add('Valdez', 'Florencio');
tree.add('Fidel', 'Francisco');
tree.add('Castro', 'Fidel');
tree.add('Barreto', 'Francisco');

tree.print(); // Pintamos el arbol => Francisco |Florencio Fidel Barreto | Miguel Orozco Valdez Castro
tree.printByLevel();  // Pintamos el arbol pero en niveles => Francisco \Florencio Fidel Barreto \ Miguel Orozco Valdez Castro
console.log('Es cierto que el arbol contiene a miguel: ', tree.contains('Miguel')); // => Buscamos el nodo Miguel y nos regresa true de que si se encuentra en el arbol
console.log('Es cierto que el arbol contiene a irineo:', tree.contains('Irineo')); // => Buscamos el nodo irineo y nos regresa false de que no se encuentra en el arbol
console.log('--- BFS');
tree.traverseBFS(function(node) { console.log(node.informacion); }); // recorre el arbol
console.log('--- DFS preOrder');
tree.traverseDFS(function(node) { console.log(node.informacion); }, 'preOrder'); // => Recorre el arbol en preorder
console.log('--- DFS postOrder');
tree.traverseDFS(function(node) { console.log(node.informacion); }, 'postOrder'); // => Recorre el arbol en Postorder
tree.remove('Barreto'); // Eliminamos al nodo Barreto
tree.print(); // => Mostramos el arbol
tree.remove('Fidel');
tree.print(); // => Mostramos el arbol