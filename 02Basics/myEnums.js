"use strict";
// enum SeatChoice {
//     AISLE = 10,
//     MIDDLE = 21,
//     WINDOW,
//     FOURTH
// }
Object.defineProperty(exports, "__esModule", { value: true });
// // if you choose to assign string values to the enum, you need to assign values to all of them
// enum SeatChoice {
//     AISLE = "AISLE",
//     MIDDLE = "MIDDLE",
//     WINDOW = "WINDOW",
//     FOURTH = "FOURTH"
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.AISLE;
var choice = 0 /* Choices.YES */;
