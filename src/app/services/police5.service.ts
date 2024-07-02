import { Injectable } from '@angular/core';
import { Police } from '../models/police.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Police5Service {
  private police5: Police;

  constructor() {
    this.police5 = new Police(
      'Goku Zambrano',
      19,
      Gender.Male,
      'Bastion Popular, Guayakill',
      123456789,
      'SYA2123'
    )
   }
  
  getPolice5(): Police{
    return this.police5;
  }
  
}
