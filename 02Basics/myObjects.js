"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "John Ivan",
    email: "johnivanpuayap@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var username = _a.username, isPaid = _a.isPaid;
    console.log(username, isPaid);
}
createUser({ username: "John Ivan", isPaid: false });
// this is a weird way of doing it
var newUser = { username: "John Ivan", isPaid: false, email: "johnivanpuayap@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "TypeScript", price: 200 };
}
// variables with ? at the end are optional
var myUser = {
    _id: '1234',
    name: "John Ivan",
    email: "johnivanpuayap@gmail.com",
    isActive: false,
};
