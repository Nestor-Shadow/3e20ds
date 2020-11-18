let s = [3, 1, 4, 2, 3], min = s[0];

console.log('El número menor es: ', Min());

function Min(){
    for(i = 0; i < s.length; i++){
        if(min > s[i]){
            min = s[i];
        }
        else{
          continue;
        }
        
    }
    return min;
}
//complejidad = n
