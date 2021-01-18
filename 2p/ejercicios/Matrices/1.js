//Orozco Valdez Florencio Miguel 3°E
let Matriz = [
    [2,4,6],
    [8,10,12],
    [14,16,18],
    [20,22,24]];
let Fila = [];

for (let i=0; i<Matriz.length; i++){
    console.log(Matriz[i]);
}
class SacaFila {

    static Fila() {
        for (let i = 0; i < Matriz[0][Array.length+1]; i++) {
            Fila[i] = Matriz[x][i];
        }
        return Fila
    }
}