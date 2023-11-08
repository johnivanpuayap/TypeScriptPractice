"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ivan = {
    dbId: 12,
    email: "example@google.com",
    userId: 1,
    startTrial: function () {
        return "trial started";
    },
    dateCreated: function () {
        return new Date();
    },
    getCoupon: function (name, off) {
        return off;
    }
};
ivan.email = "ivan@google.com";
