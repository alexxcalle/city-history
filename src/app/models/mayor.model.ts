import { Citizen } from "./citizen.model";
import { Gender } from "./citizen.model";

export class Mayor extends Citizen {
    constructor(
        name: string,
        age: number,
        gender: Gender,
        address: string,
        phone: number,
        termYears: number,
        alias: string
    ) {
        super(name, age, gender, address, phone);
    }

    welcomeMessage():string {
        return ""
    }
}

