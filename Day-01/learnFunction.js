"use strict";
//  we can also specify function return type, we have to add it after parameter...here void is the function return type
var greeting = function (name) {
    console.log("Hello " + name);
    // return 'hello' // it show error, because function return type is void. which means nothing.
};
//  we also have to call function and pass parameter correctly.
greeting('shahin');
// greeting(12); it's showing error, because our parameter take only string type value
var add = function (a, b) {
    return a + b;
};
var foodie = function (food) {
    console.log("hello my food name is " + food.name + ". It's price is " + food.price + ". is it expensive? " + food.expensive + " ");
};
// foodie() // showing error because it take object as a argument;
foodie({
    name: 'Jackfruit',
    price: 120,
    expensive: false
});
// we can destuctured our object...here
var myBird = function (_a) {
    var name = _a.name, expensive = _a.expensive, price = _a.price;
    console.log("My bird name is " + name + ". It's price is " + price + ". " + expensive + ", it's not much expensive.");
};
myBird({
    name: 'Doyel',
    price: 550,
    expensive: false
});
var getArray = function (arr) {
    return arr;
};
getArray(['take only string array']);
// const getsArray = (arr: string[]): number[] => { show array...
//     return arr;
// }
// --------------Generic function------------- // send type as a dynamic variable----here T is use like a variable.
var getMoney = function (array) {
    return array;
};
getMoney(['one lac']);
// getMoney<number>(['one lac']) // showing error because we use dynamic type as a number type
