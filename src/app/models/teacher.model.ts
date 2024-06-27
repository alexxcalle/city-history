import { Citizen } from "./citizen.model";

export class Teacher extends Citizen {
    public subject: string;

    constructor(
        name: string,
        age: number,
        gender: string,
        address: string,
        phone: number,
        subject: string
    ) {
        super(name, age, gender, address, phone);
        this.subject = subject;
    }
}