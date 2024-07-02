import { Injectable } from '@angular/core';
import { Chef } from '../models/chef.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class Chef2Service {
  private chef: Chef;

  constructor() {
    this.chef = new Chef(
      'Sonia Zambrano',
      37,
      Gender.Female,
      'Manabi',
      1231233122,
      'Ecuatoriana'
    )
   }

  getChef(): Chef{
    return this.chef;
  }

  prepareSignatureDish(): string {
    return 'Beef Steak';
  }
}
