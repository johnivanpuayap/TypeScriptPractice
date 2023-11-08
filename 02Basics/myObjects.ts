const User = {
    name: "John Ivan",
    email: "johnivanpuayap@gmail.com",
    isActive: true,
}

function createUser({ username, isPaid }: { username: string, isPaid: boolean }) {
    console.log(username, isPaid);
}

createUser({username: "John Ivan", isPaid: false});

// this is a weird way of doing it
let newUser = {username: "John Ivan", isPaid: false, email: "johnivanpuayap@gmail.com"}

createUser(newUser);


function createCourse(): {name: string, price: number}{
    return {name: "TypeScript", price: 200}
}


// type aliasing

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser2(user: User): User {
//     return {
//         name: "",
//         email: "",
//         isActive: false,
//     }
// }

// // this won't work
// // createUser({})

// createUser2({
//     name: "John Ivan",
//     email: "johnivanpuayap@gmail.com",
//     isActive: false,
// })

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}

// variables with ? at the end are optional
let myUser: User = {
    _id: '1234',
    name: "John Ivan",
    email: "johnivanpuayap@gmail.com",
    isActive: false,
}

// this won't work myUser._id = "12345";

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

// combine types
type cardDetails = cardNumber & cardDate & { 
    cvv: number;
}



export {}   