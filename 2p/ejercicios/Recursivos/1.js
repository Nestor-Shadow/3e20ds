var t1=1,t2=2,t3=3;
var n=4;

hanoi(n, t1,t2,t3);
function hanoi(n,ini,mov,aux)
{
    if(n==1)
        console.log("Mueva el disco "+n+",desde la torre ",ini+" hasta la Torre ",mov);
    else
    {
        hanoi(n-1,ini, aux,mov);
        console.log("Mueva el disco "+n+",desde la torre ",ini+" hasta la Torre ",mov);

        hanoi(n-1,aux,mov,ini);
    }
}