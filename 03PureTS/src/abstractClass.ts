abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {}

    abstract getSepiaFilter(): void;
    getReelTime(): number {
        // some complex calculation
        return 9;
    }
}

// when you create an abstract class, you cannot create an object from it
// const tp = new TakePhoto("portrait", "vintage");

class Instagram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ) {
        super(cameraMode, filter);
    }

    getSepiaFilter() {
        console.log("Sepia Filter");
    }
}

const tp = new Instagram("portrait", "vintage", 3);

export {}