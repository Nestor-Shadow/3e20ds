//Orozco Valdez Florencio Miguel 3°E
class Nodo{
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class Doble {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addtogead(data){
        const newNodo= new Nodo(data, this.head, null)
        if (this.head){
            newNodo.next=this.head;
            this.head.prev=newNodo;
            this.head = newNodo;
        }
        else{
            this.head= newNodo;
            this.tail= newNodo;
        }
        this.size++;
    }
    addtotail(data){
        const newNodo=new Nodo(data,null,this.tail)
        if(this.tail){
            newNodo.prev = this.tail;
            this.tail.next = newNodo;
            this.tail=newNodo
        }
        else{
            this.tail=newNodo;
            this.head=newNodo;
        }
        this.size++;
    }
    insertAct(data, ind) {
        if (ind < 0 || ind > this.size) {
            return null;
        }
        const newNodo=new Nodo(data, null,null);
        let current=this.head;
        let previo;
        if (ind===0){
            newNodo.next=current;
            current.prev=newNodo;
            this.head=newNodo;
        }
        else{
            for(let i=0;i<ind;i++){
                previo=current;
                current=current.next;
            }
            newNodo.next=current;
            newNodo.prev=previo;
            current.prev=newNodo;
            previo.next=newNodo;
        }
        this.size++;
    }
    removeFromHead(){
        if(this.head){
            return null;
        }
        let valorToReturn=this.head.data;
        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=this.head.next;
            this.head.prev=null;
        }
        this.size--;
        return valorToReturn;
    }
    removeFromTail(){
        if(this.tail){
            return null;
        }
        let valorToReturn=this.tail.data;
        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
        }
        else{
            this.tail=this.tail.next;
            this.tail.next=null;
        }
        this.size--;
        return valorToReturn;
    }
    remove(data){
        let current=this.head;
        let previo=null;
        while(current!==null){
            if(current.data==data){
                if (!previo){
                    this.removeFromHead()
                }
                else if(!current.next){
                    this.removeFromTail()
                }
                else{
                    previo.next=current.next;
                    current.next.prev=previo;
                }
                this.size--;
                return current.data;
            }
            previo=current;
            current=current.next;
        }
        return null;
    }

    print() {
        let current = this.head
        let resul="";
        while(current){
            resul+=current.data+"<->";
            current=current.next;
        }
        return resul+= "x"
    }
    reversePrint(){
        let current = this.tail;
        let resul="";
        while (current){
            resul += current.data+"<>"
            current = current.prev;
        }
        return resul+="x";
    }
}

const  listadoble= new Doble();
listadoble.addtogead(2);
listadoble.addtogead(5);
listadoble.addtotail(10);
console.log(listadoble.print())
listadoble.insertAct(35,10)
listadoble.insertAct(13,15)
console.log(listadoble.print())
console.log(listadoble.remove(7))
console.log(listadoble.reversePrint())