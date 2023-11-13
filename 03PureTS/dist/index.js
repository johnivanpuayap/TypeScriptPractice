"use strict";
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
    // shorter way of creating the constructor
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        //Protected is like private but it can be accessed by the child class
        this._courseCount = 1;
        this.city = "Cebu City";
    }
    // private methods
    deleteToken() {
        console.log("Token Deleted");
    }
    //getter
    get getAppleEmail() {
        return "apple${this.email}";
    }
    get getCourseCount() {
        return this._courseCount;
    }
    // setter
    // return type should be blank and not even void
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNum;
    }
}
// Inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 5;
    }
}
// Creating an Object
const ivan = new User("johnivanpuayap@gmail.com", "Ivan Puayap", "1");
