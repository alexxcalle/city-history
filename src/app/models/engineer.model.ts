import { Citizen } from "./citizen.model";

export class Engineer extends Citizen {
    public field: string;

    constructor(
        name: string,
        age: number,
        gender: string,
        address: string,
        phone: number,
        field: string
    ) {
        super(name, age, gender, address, phone);
        this.field = field;
    }
}