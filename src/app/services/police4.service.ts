import { Injectable } from '@angular/core';
import { Police } from '../models/police.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Police4Service {
  private police4: Police;

  constructor() {
    this.police4 = new Police(
      'Leonel Zambrano',
      20,
      Gender.Male,
      'Bastion Popular, Guayakill',
      12346789,
      'AJC2123'
    )
   }
  
  getPolice4(): Police{
    return this.police4;
  }
  
}
