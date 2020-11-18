let x = 3, y = []
for (k = 1; k <= 10; k++){
    y[k] = Math.pow(x,k)
}
y.shift()
console.log(y)