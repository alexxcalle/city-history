import { Citizen } from "./citizen.model";

export class Chef extends Citizen {
    public cuisineType: string;

    constructor(
        name: string,
        age: number,
        gender: string,
        address: string,
        phone: number,
        cuisineType: string
    ) {
        super(name, age, gender, address, phone);
        this.cuisineType = cuisineType;
    }
}