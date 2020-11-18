// Agregar n nombres aleatorios

function print(){
    
    let names = [];
    let randomNames = new Map();
    let n = 1000000;
    let cont = 1;
    for (let i = 1; i < n+1; i++) {
        
        names[i-1] = 'name'+i;
        
    }

        for(let i = n-1; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = names[i];
            names[i] = names[j];
            names[j] = t;
            randomNames.set(cont,names[i]);
            cont++;
          }       

            console.log(randomNames);

  }
  
  print();