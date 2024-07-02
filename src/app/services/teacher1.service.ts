import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class Teacher1Service {
  private teacher1: Teacher;

  constructor() {
    this.teacher1 = new Teacher(
      'Luchito Zambrano',
      30,
      Gender.Male,
      'Bastion Popular, Guayakill',
      123456789,
      'Ingles'
    );
   }
  
  getTeacher1(): Teacher{
    return this.teacher1;
  }
}
