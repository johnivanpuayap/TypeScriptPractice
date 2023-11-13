"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 9;
    }
}
// when you create an abstract class, you cannot create an object from it
// const tp = new TakePhoto("portrait", "vintage");
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepiaFilter() {
        console.log("Sepia Filter");
    }
}
const tp = new Instagram("portrait", "vintage", 3);
