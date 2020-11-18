// Tomar tiempo e imprimir resultado para, n=10e4, 10e5, 10e6

function print(){
    
    let start3 = new Date();
    let names = [];
    let randomNames = new Set();
    let n1 = 1000000; //10e6
    let n2 = 100000; //10e5
    let n3 = 10000; //10e4

    //10e4
    for (let i = 1; i < n3+1; i++) {
        
        names[i-1] = 'name'+i;
        
    }

        for(let i = n3-1; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = names[i];
            names[i] = names[j];
            names[j] = t;
            randomNames.add(names[i]);

          }       

            console.log(randomNames);

let end3 = new Date() - start3;
let seconds3 = end3/1000;



    //10e5
    let start2 = new Date();

    for (let i = 1; i < n2+1; i++) {
        
        names[i-1] = 'name'+i;
        
    }

        for(let i = n2-1; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = names[i];
            names[i] = names[j];
            names[j] = t;
            randomNames.add(names[i]);

          }       

            console.log(randomNames);

let end2 = new Date() - start2;
let seconds2 = end2/1000;

    //10e6
    let start1 = new Date();

    for (let i = 1; i < n1+1; i++) {
        
        names[i-1] = 'name'+i;
        
    }

        for(let i = n1-1; i > -1  ; i--){

            let j = Math.floor(Math.random() * i)
            let t = names[i];
            names[i] = names[j];
            names[j] = t;
            randomNames.add(names[i]);

          }       

            console.log(randomNames);

let end1 = new Date() - start1;
let seconds1 = end1/1000;

console.log("el código tardó: " + (seconds3)+ " segundos en ejecutar " +n3+ " nombres");
console.log("el código tardó: " + (seconds2)+ " segundos en ejecutar " +n2+ " nombres");
console.log("el código tardó: " + (seconds1)+ " segundos en ejecutar " +n1+ " nombres");

  }
  
  print();
