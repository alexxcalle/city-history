import { Citizen } from './citizen.model';

export class Doctor extends Citizen {
    public specialty: string;

    constructor(
        name: string,
        age: number,
        gender: string,
        address: string,
        phone: number,
        specialty: string
    ) {
        super(name, age, gender, address, phone);
        this.specialty = specialty;
    }
}