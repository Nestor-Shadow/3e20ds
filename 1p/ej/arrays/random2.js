let x = []
for (k = 1; k <= 10; k++){
    x[k] = Math.floor(Math.random() * 10 + 1)
}
x.shift()
console.log(x)