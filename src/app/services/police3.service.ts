import { Injectable } from '@angular/core';
import { Police } from '../models/police.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Police3Service {
  private police3: Police;

  constructor() {
    this.police3 = new Police(
      'Brayan Zambrano',
      21,
      Gender.Male,
      'Bastion Popular, Guayakill',
      123456789,
      'Axc2123'
    )
   }
  
  getPolice3(): Police{
    return this.police3;
  }
  
}
