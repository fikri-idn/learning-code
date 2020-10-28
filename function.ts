function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addhandle(n1: number, n2: number, callback: (number) => void) {
    const result = n1 + n2;
    callback(result);
}

printResult(add(5, 12));

let combinedValue: (a: number, b:number) => number;

combinedValue = add;


console.log(combinedValue(8,8));

addhandle(10, 10, (result) => {
    console.log(result);
})