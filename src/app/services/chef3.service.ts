import { Injectable } from '@angular/core';
import { Chef } from '../models/chef.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class Chef3Service {
  private chef: Chef;

  constructor() {
    this.chef = new Chef(
      'Brayan Zambrano',
      26,
      Gender.Male,
      'Manabi',
      12312317822,
      'Ecuatoriana'
    )
   }

  getChef(): Chef{
    return this.chef;
  }
}
