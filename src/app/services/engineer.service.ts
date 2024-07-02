import { Injectable } from '@angular/core';
import { Engineer } from '../models/engineer.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class EngineerService {
  private engineer: Engineer;

  constructor() {
    this.engineer = new Engineer(
      'Brayan Zambrano',
      26,
      Gender.Male,
      'Manabi',
      12312317822,
      'Ecuatoriana'
    )
   }

  getEngineer(): Engineer{
    return this.engineer;
  }
}
