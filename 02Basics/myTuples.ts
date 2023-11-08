//const user: (string | number)[] = [1, "hc"];


// tuple
let user: [string, number, boolean];

user = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 121];

type User = [number, string];

const newUser: User = [1, "example@google.com"];

newUser[1] = "1234";

// this is possible so be cautious about it
newUser.push(1234);

//enums



export {}