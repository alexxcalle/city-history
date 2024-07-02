import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  private doctor: Doctor

  constructor() {
    this.doctor = new Doctor(
      'Dr. Jaime Roldos',
      45,
      Gender.Male,
      'Guayaquil',
      1231233122,
      'Ecuatoriana'
     )
   }

  getDoctor(): Doctor{
    return this.doctor;
  }
  
  diagnose(): string {
    return 'indigestion';
  }
}
