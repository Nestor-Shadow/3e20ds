// Explicar diferencia entre map y Mapset con un ejemplo

let jose = { name: "Jose" };
let map = new Map();
map.set(jose, "...");
console.log(map);
jose = null; // se sobreescribe la referencia

// jose esta almacenado en map
// podemos llamarlo usando map.keys()

let jesus = { name: "Jesus" };
let weakMap = new WeakMap();
weakMap.set(jesus, "...");
console.log(weakMap);
jesus = null; // se sobreescribe la referencia

// jesus es removido de la memoria!