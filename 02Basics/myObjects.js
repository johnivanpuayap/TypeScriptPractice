"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "John Ivan",
    email: "johnivanpuayap@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "John Ivan", isPaid: false });
// this is a weird way of doing it
var newUser = { name: "John Ivan", isPaid: false, email: "johnivanpuayap@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "TypeScript", price: 200 };
}
