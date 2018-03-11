function myFunction(param: string): string {
    
    
    return 'abc';
}


function myFunction2(param: string): void {
    
    //void should not return anything
    //return 'abc';
}

function myFunction3(param1: number, param2: number): number {
    
    return param1 + param2;
}


function myFunction4(param1: number, param2: number, param3?: number): number {
    
    return param1 + param2;
}

function myFunc(...args:any[]) {
    for (let arg of args) {
        console.log(typeof (arg));
    }
}

myFunc(1, 2,3, 'a', true);

console.log(myFunction3(3, 6));
