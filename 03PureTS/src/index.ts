// Creating a Class
class User {

    email: string;
    name: string;
    readonly city: string = "Cebu City";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

// Creating an Object
const ivan = new User("johnivanpuayap@gmail.com", "Ivan Puayap");