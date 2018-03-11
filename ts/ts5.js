function myFunction(param) {
    return 'abc';
}
function myFunction2(param) {
    //void should not return anything
    //return 'abc';
}
function myFunction3(param1, param2) {
    return param1 + param2;
}
function myFunction4(param1, param2, param3) {
    return param1 + param2;
}
function myFunc() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        console.log(typeof (arg));
    }
}
myFunc(1, 2, 3, 'a', true);
console.log(myFunction3(3, 6));
