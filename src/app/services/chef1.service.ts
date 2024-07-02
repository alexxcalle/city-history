import { Injectable } from '@angular/core';
import { Chef } from '../models/chef.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class Chef1Service {
  private chef: Chef;

  constructor() {
    this.chef = new Chef(
      'Gordon Ramsay',
      37,
      Gender.Male,
      'London, England',
      123123312312,
      'French'
    )
   }

  getChef(): Chef{
    return this.chef;
  }

  prepareSignatureDish(): string {
    return 'Beef Wellington';
  }

  
}
