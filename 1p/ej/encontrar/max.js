let s = [3, 1, 4, 2, 3], max = s[0];

console.log('El número mayor es: ', Max());

function Max(){
    for(i = 0; i < s.length; i++){
        if(max < s[i]){
            max = s[i];
        }
        else{
          continue;
        }
        
    }
    return max;
}
//complejidad n
