"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// Optional Parameters
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper('Hello');
signUpUser("ivan", "johnivanpuayap@gmail.com", true);
loginUser("h", "johnivanpuayap@gmail.com");
// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
// const heroes = ["thor", "ironman", "spiderman"];
var heroes = [1, 2, 3];
heroes.map(function (hero) {
    return 'hero is ${hero}';
});
function consoleError(err) {
    console.log(err);
}
function handleError(err) {
    throw new Error(err);
}
