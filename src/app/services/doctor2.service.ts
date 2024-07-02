import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Doctor2Service {
  private doctor: Doctor

  constructor() {
    this.doctor = new Doctor(
      'Rafael Correa',
      59,
      Gender.Male,
      'Guayaquil',
      12313122,
      'Ecuatoriana'
     )
   }

  getDoctor(): Doctor{
    return this.doctor;
  }
  
}
