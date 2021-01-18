//Orozco Valdez Florencio Miguel 3°E

const MergeSort = arrary => {if (arrary.length < 2) {

    return arrary;
}
const middle = parseInt(arrary.length / 2) | 0;

const left = arrary.slice(0, middle);

const right = arrary.slice(middle);

const Merge = (left, right) => {
    const result = [];
    let il = ir = 0;

    while (il < left.length && ir < right.length) {
        result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
    }

    return [...result, ...left.slice(il), ...right.slice(ir)];
}

return Merge(MergeSort(left), MergeSort(right));
}

const arrary = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = MergeSort(arrary);
console.log(arrary);
console.log(result)

result; //[ 1, 4, 10, 12, 31, 32, 40, 43, 65, 67 ]

