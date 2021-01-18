//Orozco Valdez Florencio Miguel 3°E
class Nodo{
    constructor(Dato, Next){
        this.Dato = Dato;
        this.Next = Next;
    }
}
class Enlazada{
    constructor() {
        this.Inicio=null;
        this.Tamaño=5;
    }
    AgregarDato(Dato){
        let NuevoNodo= new Nodo(Dato,null);
        if (!this.Inicio){
            this.Inicio=NuevoNodo;
        }
        else{
            let Actual=this.Inicio;
            while (Actual.Next){
                Actual=Actual.Next;
            }
            Actual.Next=NuevoNodo;
        }
        this.Tamaño ++;
    }

}
let Lista = new Enlazada()
console.log(Lista);
Lista.AgregarDato(15);
Lista.AgregarDato(9);
Lista.AgregarDato(5);
console.log(Lista);