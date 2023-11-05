function addTwo(num: number): number{
    return num + 2;
}

function getUpper(str: string) {
    return str.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}


// Optional Parameters
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5);
getUpper('Hello');
signUpUser("ivan", "johnivanpuayap@gmail.com", true);
loginUser("h", "johnivanpuayap@gmail.com");

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => { 
    return "";
}

// const heroes = ["thor", "ironman", "spiderman"];
const heroes = [1, 2, 3];

heroes.map((hero): string => {
    return 'hero is ${hero}';
})

function consoleError(err: string): void {
    console.log(err);
}

function handleError(err: string): never {
    throw new Error(err);
}

export {}