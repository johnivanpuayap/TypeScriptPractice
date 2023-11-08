//this allows us to have multiple types for a variable
let score: number | string = 33;

score = 44;
score = "55";

console.log(score);

type Users = {
    name: string;
    id: number;
}

type Admins = {
    username: string;
    id: number;
}

let userr: Users | Admins = {name: "Ivan", id: 1};

// function getDatabaseId(id: number | string){
//     console.log('DB id is: ${id}');
// }

getDatabaseId(5);
getDatabaseId("5");

function getDatabaseId(id: number | string){
    
    // this would get an error since typescript considers that id is a number and a string
    // id.toUpperCase();    
    
    // to make it work we need to use a type guard
    if(typeof id === "string"){
        id.toUpperCase();
    }
    else {
        id.toFixed();
    }
    
    console.log('DB id is: ${id}');
}

// array
const arrayUnion: (number | string | boolean)[] = [1, 2, 3, "4", 5, true];

// this allows that seatAllotment can only be one of the three valuess
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "window";