// S=[3,1,4,2,3] potencia(S)

const getAllSubsets = 
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

console.log(getAllSubsets([3,1,4,2,3]));