// Agregar n nombres aleatorios

function print(){
    
    let names = [];
    let randomNames = new Set();
    let n = 1000000;
    for (let i = 1; i < n+1; i++) {
        
        names[i-1] = 'name'+i;
        
    }

        for(let i = n-1; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = names[i];
            names[i] = names[j];
            names[j] = t;
            randomNames.add(names[i]);

          }       

            console.log(randomNames);

  }
  
  print();