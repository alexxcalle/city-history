import { Injectable } from '@angular/core';
import { Mayor } from '../models/mayor.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class MayorService {
  private mayor: Mayor;

  constructor() {
    this.mayor = new Mayor(
      'Abdala Bucaram',
      50,
      Gender.Male,
      'Bastion Popular, Guayakill',
      123456789,
      5,
      'El loco que ama'
    )
  }

  getMayor(): Mayor{
    return this.mayor;
  }

  welcomeMessage(): string {
    return this.mayor.welcomeMessage();
  }

  getAlias(): string {
    return this.mayor.getAlias();
  }
}
