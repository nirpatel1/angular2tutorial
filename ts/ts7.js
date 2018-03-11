var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person1 = {
    first_name: 'Nirmal',
    last_name: 'Patel',
    age: 23
};
var person2 = {
    first_name: 'Nirmal',
    last_name: 'Patel',
    age: 23,
    hair_colour: 'black',
    height: 180,
    eye_colour: 'brown',
    weight: 170
};
var person3 = {
    first_name: 'Nirmal',
    last_name: 'Patel',
    age: 23,
    hair_colour: 'black',
    height: 180,
    eye_colour: 'brown',
    weight: 170,
    nationality: 'USA'
};
//Classes
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.display = function () {
        console.log(this);
    };
    Person.prototype.displayAsString = function () {
        return JSON.stringify(this, null, 2);
    };
    return Person;
}());
var pp1 = new Person();
pp1.first_name = 'nirmal';
pp1.last_name = 'patel';
pp1.display();
console.log(pp1.displayAsString());
var SuperPerson = /** @class */ (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SuperPerson;
}(Person));
var sp1 = new SuperPerson();
sp1.first_name = 'asdf';
sp1.last_name = 'asdfasdf';
sp1.age = 23;
sp1.super_power = 'laser beams';
sp1.display();
