import { Citizen } from "./citizen.model";

export class Artist extends Citizen {
    public artForm: string;

    constructor(
        name: string,
        age: number,
        gender: string,
        address: string,
        phone: number,
        artForm: string
    ) {
        super(name, age, gender, address, phone);
        this.artForm = artForm;
    }
}