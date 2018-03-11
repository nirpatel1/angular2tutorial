var x;
var y;
var z;
var abc = 'sing';
function f(shouldInitialize) {
    var x;
    if (shouldInitialize) {
        x = 10;
    }
    return x;
}
console.log(f(true));
console.log(f(false));
