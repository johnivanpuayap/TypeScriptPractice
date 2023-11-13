"use strict";
class Instagram {
    constructor(cameraMode, filter, burst, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.burstMode = burstMode;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, burstMode, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.burstMode = burstMode;
        this.short = short;
    }
    createStory() {
        console.log("Story Created");
    }
}
