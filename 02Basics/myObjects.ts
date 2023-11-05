const User = {
    name: "John Ivan",
    email: "johnivanpuayap@gmail.com",
    isActive: true,
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "John Ivan", isPaid: false});

// this is a weird way of doing it
let newUser = {name: "John Ivan", isPaid: false, email: "johnivanpuayap@gmail.com"}

createUser(newUser);


function createCourse(): {name: string, price: number}{
    return {name: "TypeScript", price: 200}
}


// type aliasing

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser2(user: User): User {
    return {
        name: "",
        email: "",
        isActive: false,
    }
}

// this won't work
// createUser({})

createUser2({
    name: "John Ivan",
    email: "johnivanpuayap@gmail.com",
    isActive: false,
})

export {}   