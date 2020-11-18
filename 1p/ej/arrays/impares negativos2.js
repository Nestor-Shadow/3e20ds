let x = [0]

for (let k = 1; k <= 10; k++){
      x[k] = Math.pow(-1,k)*(2*k-1);
}
    x.shift();
    console.log(x);