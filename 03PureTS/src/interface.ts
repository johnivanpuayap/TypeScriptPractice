interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
    burstMode: boolean
}

interface Story {
    createStory(): string | number | void

}

class Instagram implements TakePhoto {
    
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public burstMode: boolean
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public burstMode: boolean,
        public short: string
    ) {}

    createStory(): string | number | void {
        console.log("Story Created");
    }
}