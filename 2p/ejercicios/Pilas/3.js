//Orozco Valdez Florencio Miguel 3°E
class Recursion{
    constructor() {
        this.recursion=[]
    }
    Poner(si){
        this.recursion.push(si)
        return this.recursion
    }
    Final(){
        console.log(this.recursion[(this.Tamaño())-1])
    }
    Eliminar(){
        console.log(this.recursion.pop())

    }
    Enseñar(){
        console.log(this.recursion)
    }
    Tamaño(){
        return  this.recursion.length;
    }
   
    Random(){
        recursion.Poner(Math.round(Math.random()*10));
    }
}

recursion=new Recursion()

recursion.Random()
recursion.Random()
recursion.Random()
recursion.Random()
console.log('Números generados de manera random con recursión')
recursion.Enseñar()
console.log('valores de recursión')
mundo()//dice si es recursión. 
function mundo(){
    if(recursion.Tamaño()!=0) {
        recursion.Eliminar()
        mundo()
    }
    else{
        console.log('Es recursión')
    }
}