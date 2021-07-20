//  we can also specify function return type, we have to add it after parameter...here void is the function return type

const greeting = (name: string) : void => {
    console.log(`Hello ${name}`)

    // return 'hello' // it show error, because function return type is void. which means nothing.
}

//  we also have to call function and pass parameter correctly.
greeting('shahin');

// greeting(12); it's showing error, because our parameter take only string type value


const add = (a: number, b: number) : number => {
    return a+b;
}

const foodie = (food: Food): void => {
    console.log(`hello my food name is ${food.name}. It's price is ${food.price}. is it expensive? ${food.expensive} `)
}

// foodie() // showing error because it take object as a argument;

foodie({
    name: 'Jackfruit',
    price: 120,
    expensive: false
});


// we can destuctured our object...here
const myBird = ({name, expensive, price}: Food) : void => {
    console.log(`My bird name is ${name}. It's price is ${price}. ${expensive}, it's not much expensive.`)
}

myBird({
    name: 'Doyel',
    price: 550,
    expensive: false
});



const getArray = (arr: string[]): string[] => {
    return arr;
}
getArray(['take only string array'])
// const getsArray = (arr: string[]): number[] => { show array...
//     return arr;
// }


// --------------Generic function------------- // send type as a dynamic variable----here T is use like a variable.
const getMoney = <T>(array: T[]) : T[] => {
    return array;
}

getMoney<string>(['one lac'])
// getMoney<number>(['one lac']) // showing error because we use dynamic type as a number type


