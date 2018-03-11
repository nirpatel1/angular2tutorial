
//Set rules to an object
interface iPerson {
    first_name: string;
    last_name: string;
    age: number;
}

let person1: iPerson = {
    first_name: 'Nirmal',
    last_name: 'Patel',
    age: 23
}


interface iDescriptivePerson extends iPerson {
    hair_colour: string;
    height: number;
    eye_colour: string;
    weight: number;
}

let person2: iDescriptivePerson = {
    first_name: 'Nirmal',
    last_name: 'Patel',
    age: 23,
    hair_colour: 'black',
    height: 180,
    eye_colour: 'brown',
    weight: 170
}

interface iNationality {
    nationality: string;
}

interface iNationalisedDescriptivePerson extends iDescriptivePerson, iNationality { 

}

let person3: iNationalisedDescriptivePerson = {
    first_name: 'Nirmal',
    last_name: 'Patel',
    age: 23,
    hair_colour: 'black',
    height: 180,
    eye_colour: 'brown',
    weight: 170,
    nationality: 'USA'
}

interface iDisplayable {
    display(): void;
    displayAsString(): string;
}

//Classes
class Person implements iDisplayable{
    first_name: string;
    last_name: string;
    age: number;
    private _ssn: string;
    display(): void {
        console.log(this);
    }
    displayAsString(): string {
        return JSON.stringify(this, null, 2);
    }

    constructor(fn: string, ln: string, age: number) {
        this.first_name = fn;
        this.last_name = ln;
        this.age = age;
    }
}

let pp1 = new Person('nirmal','patel',23);

console.log(pp1.displayAsString());


class SuperPerson extends Person {
    super_power: string;

    constructor(fn: string, ln: string, age: number, sp: string) {
        super(fn, ln, age);
        this.super_power = sp;
    }

    doSomethingComplicated() {
    let s = this.helperMethod1();
    }

    private helperMethod1(): string {
        return 'asdf';
    }

}

let sp1 = new SuperPerson('asdf', 'qwer', 23, 'laser beams');

sp1.display();