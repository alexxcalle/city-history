import { Citizen } from "./citizen.model";
import { Gender } from "./citizen.model";

export class Mayor extends Citizen {
    
    constructor(
        name: string,
        age: number,
        gender: Gender,
        address: string,
        phone: number,
        public termYears: number,
        public alias: string
    ) {
        super(name, age, gender, address, phone);
    }

    getAlias(): string {
        return this.alias;
    }
    
    welcomeMessage():string {
        return "Buenos dias Guakill carajo, vamos a ver esta huevada y disfrutar una guatita"
    }
}

