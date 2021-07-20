"use strict";
// DATA TYPES: Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown,
var anything = 'Using any is not a good practice,  try to avoid';
anything = 12; // it's not showing any error;
anything = true; // it's not showing any error;
// --------------------------Enfarent-----------------------
// type enfarent (type infarent is a method machine can easily identify the variable name);
// ......STRING......
var myName = "Name is a String";
myName = "it's a string.";
// myName = 12 ; (it showing error, because myName is a string variable)
// myName = true ; (it showing error, because myName is a string variable)
// ......NUMBER......
var age = 12;
age = 21;
// age = "twelve" ;(it showing error, because age is a number variable)
// age = true; (it showing error, because age is a number variable)
// .....BOOLEAN......
var hungry = false;
hungry = true;
// hungry = 'yes'; (it showing error, because hungry is a boolean variable)
// hungry = 12; (it showing error, because hungry is a boolean variable)
// ----------------------------------Enotation---------------------------------------
// type inotation (if we declare the type name than it's call enotation);
var text = 'Started learning typescript';
text = 'I learning basic typescript';
var Roll;
Roll = 21;
var id = 2123;
id = 3212;
var coding = true;
coding = false;
var eating;
eating = true;
// ---------------------------------------------
// if a variable value is not constant. that means if a variable value can be string and also can be number than what should we do...?
var studentId = 2343; // it's call typescript union, which take both value;
studentId = "thirty nine";
var isStudent = true;
isStudent = "yes";
// isStudent = 1 ; (it showing error, because isStudent can't be number type. Because we declare that this variable type can be string or number)
// ----------OBJECT--------------
// if we declare it as a object than it's not effected in object property. Hover the person than you can understand. we can easily change whatever we want in object,
var person = {
    name: "Shahin Bhuiyan",
    age: 21,
    hobby: "Coding"
};
//   it's not showing any error. 
person = {
    nothing: true
};
// if we not declare it than what will happen. Hover the student than you understand that it will also focus in object property.
// it's enfarent...
var student = {
    Roll: 234,
    class: 'five',
    good: true
};
student = {
    Roll: 32,
    class: 'two',
    good: false
};
//  we can also do it as a enotation
var schools = {
    name: 'shaheen academy',
    amount: 5000
};
// it's showing error because we are not add amount property.
// let college : instituteType = { 
//     name: 'Ramiz Uddin Cantonment College'
// }
var university = {
    name: 'Dhaka university',
    amount: 55000
};
var mango = {
    name: 'Mango',
    price: 45,
    expensive: false
};
//  Look it's not showing any error for price. because price is an optional property.
var milk = {
    healthy: true,
    color: "white"
};
// ----------------------ARRAY---------------------
var numberss = [33, 50, 43, 64]; //  hover it's a number[] // enfarent
var numbers = [33, 50, 43, 64]; //  hover it's a number[] // enotation
var condition = ['dhfdi', 232, true]; // any array
// if it can contain number and string
var boy = [1, 2, 4, 4, 'one', 'five'];
var foodies = [
    {
        name: 'Mango',
        price: 45,
        expensive: false
    },
    {
        name: 'Orange',
        price: 130,
        expensive: true
    }
];
var gameDirection = "left";
