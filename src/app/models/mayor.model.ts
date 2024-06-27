import { Citizen } from "./citizen.model";

export class Mayor extends Citizen {
    constructor(
        name: string,
        age: number,
        gender: string,
        address: string,
        phone: number,
        termYears: number
    ) {
        super(name, age, gender, address, phone);
    }
}