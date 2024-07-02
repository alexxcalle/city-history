import { Citizen } from "./citizen.model";
import { Gender } from "./citizen.model";

export class Chef extends Citizen {
    public cuisineType: string;

    constructor(
        name: string,
        age: number,
        gender: Gender,
        address: string,
        phone: number,
        cuisineType: string
    ) {
        super(name, age, gender, address, phone);
        this.cuisineType = cuisineType;
    }

    prepareSignatureDish(): string {
        return 'Signature Dish';
    }
}