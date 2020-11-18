let x = [0]
for (k = 1; k <= 10; k++){
    x[k] = (2*k)- 1
}
x.shift()
console.log(x)