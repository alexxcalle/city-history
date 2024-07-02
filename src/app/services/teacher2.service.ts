import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Teacher2Service {
  private teacher2: Teacher;

  constructor() {
    this.teacher2 = new Teacher(
      'Sonia Zambrano',
      30,
      Gender.Female,
      'Calle 13',
      123456789,
      'Historia'
    );
   }
  
  getTeacher2(): Teacher{
    return this.teacher2;
  }
}
