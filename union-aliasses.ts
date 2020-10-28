type Combinable = number | string;
type CombineDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: CombineDescriptor
    ) {
    let result;

    if(typeof input1 === 'number' && typeof input2 == 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;

    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }

   
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('max', 'Wiliam', 'as-text');
console.log(combineNames);
