// enum SeatChoice {
//     AISLE = 10,
//     MIDDLE = 21,
//     WINDOW,
//     FOURTH
// }


// // if you choose to assign string values to the enum, you need to assign values to all of them
// enum SeatChoice {
//     AISLE = "AISLE",
//     MIDDLE = "MIDDLE",
//     WINDOW = "WINDOW",
//     FOURTH = "FOURTH"
// }

enum SeatChoice {
    AISLE = "AISLE",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const seat = SeatChoice.AISLE

// const will make the js file from conversion shorter
const enum Choices {
    YES,
    NO,
    MAYBE
}

const choice = Choices.YES;

export {}
