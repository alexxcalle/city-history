import { Citizen } from './citizen.model';
import { Gender } from './citizen.model';

export class Police extends Citizen {
    public badgeNumber: string;

    constructor(
        name: string,
        age: number,
        gender: Gender,
        address: string,
        phone: number,
        badgeNumber: string
    ) {
        super(name, age, gender, address, phone);
        this.badgeNumber = badgeNumber;
    }

    patrol(): string {
        return 'Patrolling';
    }
}