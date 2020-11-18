// Agregar 10 nombres e imprimir

function print(){
    
    let names = ['Ekko','Ahri','Nami','Lee','Zed','Yasuo','Orianna','Blitzcrank','Samira','Zyra'];
    let randomNames = new Map();
    let n = 1;
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