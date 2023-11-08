interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrial: () => void;
    dateCreated(): Date;
    getCoupon(couponName: string, value: number): number;
}

// reopens the interface and adds a new property
interface User {
    githubToken: string;
}


// inheritance
interface Admin extends User {
    role: "Admin" | "SuperAdmin";
    adminSince: Date;
}

const ivan: Admin = {
    dbId: 12, 
    email: "example@google.com", 
    userId: 1,
    startTrial: () => {
        return "trial started";
    },
    dateCreated: () => {
        return new Date();
    },
    getCoupon: (name: "hellow", off: 10) => {
        return off;
    },
    githubToken: "githubToken",
    role: "Admin",
    adminSince: new Date()
}

ivan.email = "ivan@google.com";



export {}