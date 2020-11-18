// Generar 10 nombres aleatorios//name3, name9, ... , name1

function print(){
    
    let names = [];
    let randomNames = new Map();
    let n = 1;
    for (let i = 1; i < 11; i++) {
        
        names[i-1] = 'name'+i;
        
    }

        for(let i = 9; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = names[i]
            names[i] = names[j]
            names[j] = t
            randomNames.set(n,names[i]);
            n++;
          }       

            console.log(randomNames);

  }
  
  print();