// Creating a Class
// class User {
//     public email: string;
//     // default is public
//     private name: string;
//     readonly city: string = "Cebu City";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

class User {
    //Protected is like private but it can be accessed by the child class
    protected _courseCount = 1

    readonly city: string = "Cebu City";

    // shorter way of creating the constructor
    constructor(
        public email: string, 
        public name: string,
        private userId: string,
    ) {}

    // private methods
    private deleteToken() {
        console.log("Token Deleted");
    }

    //getter
    get getAppleEmail(): string{
        return "apple${this.email}"
    }

    get getCourseCount(): number{
        return this._courseCount;
    }

    // setter
    // return type should be blank and not even void
    set setCourseCount(courseNum: number){
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one")
        }
        this._courseCount = courseNum;
    }
}

// Inheritance

class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount() {
        this._courseCount = 5;
    }
}

// Creating an Object
const ivan = new User("johnivanpuayap@gmail.com", "Ivan Puayap", "1");