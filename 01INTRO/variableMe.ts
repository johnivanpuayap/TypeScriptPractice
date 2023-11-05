let greetings: string = "Hello World";
let mynum = 6;

greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 33446.3;


// boolean
let isLoggedIn: boolean = true;


// Typescript have type inference. 
// So when you are already assigning a value to a variable, 
// it will automatically infer the type of the variable and you don't have to add the type annotation.


let hero: string;

function getHero() {
    return "thor";
}

hero = getHero();

export {}