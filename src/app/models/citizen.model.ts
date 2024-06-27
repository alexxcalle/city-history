export class Citizen {
    constructor(
      public name: string,
      public age: number,
      public gender: Gender,
      public address: string,
      public phone: number,
    ) {}
  }
  
  export enum Gender {
    "Male",
    "Female"
}