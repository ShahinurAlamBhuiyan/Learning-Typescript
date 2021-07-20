// DATA TYPES: Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown,

let anything: any = 'Using any is not a good practice,  try to avoid';
anything = 12; // it's not showing any error;
anything = true; // it's not showing any error;

// --------------------------Enfarent-----------------------
// type enfarent (type infarent is a method machine can easily identify the variable name);

// ......STRING......
let myName = "Name is a String"; 
myName = "it's a string."; 
// myName = 12 ; (it showing error, because myName is a string variable)
// myName = true ; (it showing error, because myName is a string variable)


// ......NUMBER......
let age = 12;
age = 21;
// age = "twelve" ;(it showing error, because age is a number variable)
// age = true; (it showing error, because age is a number variable)


// .....BOOLEAN......
let hungry = false;
hungry = true;
// hungry = 'yes'; (it showing error, because hungry is a boolean variable)
// hungry = 12; (it showing error, because hungry is a boolean variable)

// ----------------------------------Enotation---------------------------------------
// type inotation (if we declare the type name than it's call enotation);

let text: String = 'Started learning typescript' ;
text = 'I learning basic typescript';

let Roll: Number;
Roll = 21;
let id: Number = 2123;
id = 3212;

let coding: Boolean = true;
coding = false;
let eating: Boolean;
eating = true;


// ---------------------------------------------


// if a variable value is not constant. that means if a variable value can be string and also can be number than what should we do...?

let studentId: number | string = 2343; // it's call typescript union, which take both value;
studentId = "thirty nine";
// studentId = true; (it showing error, because studentId is a number or string variable);




// we can made a custom type , which call "typeAlias" in typescript,
type StringOrBoolean = string | boolean;

let isStudent : StringOrBoolean = true;
isStudent = "yes";
// isStudent = 1 ; (it showing error, because isStudent can't be number type. Because we declare that this variable type can be string or number)


// ----------OBJECT--------------
// if we declare it as a object than it's not effected in object property. Hover the person than you can understand. we can easily change whatever we want in object,
 let person: object = {
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
 let student = {
     Roll: 234,
     class: 'five',
     good: true
 };
 
 student = {  // it's showing error
    Roll: 32,
    class: 'two',
    good: false
 }

 // we can also use type in here;

 type instituteType = { name: string, amount: number}; 


//  we can also do it as a enotation
let schools: instituteType = {
    name: 'shaheen academy',
    amount: 5000
}

// it's showing error because we are not add amount property.
// let college : instituteType = { 
//     name: 'Ramiz Uddin Cantonment College'
// }

let university: instituteType = {
    name: 'Dhaka university',
    amount: 55000
}


// we can typescript interface for object schema, We try to use interface for object
interface Food  {
    name: string;
    price: number
    expensive : boolean;
}

let mango : Food = {
    name: 'Mango',
    price: 45,
    expensive: false
}
// it's showing error because we not use expensive below.

// let strawberry : Food = {
//     name: "Strawberry",
//     price: 650
// }




//  if we don't want to add any property. Means if we want to make a property optional, than what we do?
interface Liquid {
    healthy: boolean,
    color: string, 
    price?: number  // we can use ? this before the : to make that property as a optional
}

//  Look it's not showing any error for price. because price is an optional property.
let milk : Liquid = {
    healthy: true,
    color: "white"
}





// ----------------------ARRAY---------------------
const numberss = [ 33, 50, 43, 64 ] //  hover it's a number[] // enfarent

const numbers: number[] = [ 33, 50, 43, 64 ] //  hover it's a number[] // enotation

const condition: any[] = ['dhfdi', 232, true] // any array


// if it can contain number and string

const boy : (number | string)[] = [1, 2, 4, 4, 'one', 'five']

const foodies: Food[] = [ // I use the food object interface, which show the object schema.
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
]


// -------------------LITERAL TYPE----------------------------

type direction = 'left'| 'right' | "top" | "bottom";

let gameDirection: direction = "left";