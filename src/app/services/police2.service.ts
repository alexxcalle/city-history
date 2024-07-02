import { Injectable } from '@angular/core';
import { Police } from '../models/police.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Police2Service {
  private police2: Police;

  constructor() {
    this.police2 = new Police(
      'Juan Zambrano',
      28,
      Gender.Male,
      'Bastion Popular, Guayakill',
      12356789,
      'Acd223'
    )
   }
  
  getPolice2(): Police{
    return this.police2;
  }
  
}
