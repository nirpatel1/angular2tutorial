var x: number;
var y: string;
var z: boolean;

var abc: any = 'sing';
const myName: string = 'Nirmal Patel';

function f(shouldInitialize: Boolean) {
    let x: number;
    if (shouldInitialize) {
        x = 10;
    }

    return x;
}

console.log(f(true));

console.log(f(false));

