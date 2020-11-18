// Agregar 10 nombres e imprimir

function print(){
    
    let names = ['Ekko','Ahri','Nami','Lee','Zed','Yasuo','Orianna','Blitzcrank','Samira','Zyra'];
    let randomNames = new Set();

        for(let i = 9; i > -1  ; i--){
            let j = Math.floor(Math.random() * i)
            let t = names[i]
            names[i] = names[j]
            names[j] = t
            randomNames.add(names[i]);
          }       
            console.log(randomNames);
  }
  print();