// Explicar diferencia entre set y weakset con un ejemplo

var set = new Set([1,2,3,4]);

//No puede ser creado desde un array
var weakset = new WeakSet();
weakset.add({a: 1}); //objeto referenciado

console.log(set.size);//4
console.log(weakset.size);//undefined

for(var i of set)
{
    console.log(i); //1,2.3.4
}

//no se puede ejecutar y tira error
for(var i of weakset)
{
    console.log(i);
}

set.clear();
weakset.clear(); //Esto si funciona
