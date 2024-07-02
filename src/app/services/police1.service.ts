import { Injectable } from '@angular/core';
import { Police } from '../models/police.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Police1Service {
  private police1: Police;

  constructor() {
    this.police1 = new Police(
      'Brayan Zambrano',
      30,
      Gender.Male,
      'Bastion Popular, Guayakill',
      123456789,
      'Abc2123'
    )
   }
  
  getPolice1(): Police{
    return this.police1;
  }

  patrol(): string {
    return 'Patrolling';
  }
}
