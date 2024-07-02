import { Component, OnInit } from '@angular/core';
import { MayorService } from '../../services/mayor.service';
import { Mayor } from '../../models/mayor.model';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Artist } from '../../models/artist.model';
import { Chef } from '../../models/chef.model';
import { Doctor } from '../../models/doctor.model';
import { Engineer } from '../../models/engineer.model';
import { Police } from '../../models/police.model';
import { Teacher } from '../../models/teacher.model';
import { ArtistService } from '../../services/artist.service';
import { Chef1Service } from '../../services/chef1.service';
import { Chef2Service } from '../../services/chef2.service';
import { Chef3Service } from '../../services/chef3.service';
import { DoctorService } from '../../services/doctor.service';
import { Doctor2Service } from '../../services/doctor2.service';
import { EngineerService } from '../../services/engineer.service';
import { Police1Service } from '../../services/police1.service';
import { Police2Service } from '../../services/police2.service';
import { Police3Service } from '../../services/police3.service';
import { Police4Service } from '../../services/police4.service';
import { Police5Service } from '../../services/police5.service';
import { Teacher1Service } from '../../services/teacher1.service';
import { Teacher2Service } from '../../services/teacher2.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzAlertModule} from 'ng-zorro-antd/alert';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzListModule,
    NzGridModule,
    NzDividerModule,
    NzDescriptionsModule,
    NzAlertModule
  ],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'] // Corregido de 'styleUrl' a 'styleUrls' y en plural
})
export class HistoryComponent implements OnInit {
  mayor!: Mayor | { [key: string]: any };
  artist!: Artist;
  chef1!: Chef;
  chef2!: Chef;
  chef3!: Chef;
  doctor!: Doctor;
  doctor2!: Doctor;
  engineer!: Engineer;
  police1!: Police;
  police2!: Police;
  police3!: Police;
  police4!: Police;
  police5!: Police;
  teacher1!: Teacher;
  teacher2!: Teacher;

  currentScene: number = 0;
  scenes: { title: string, description: string, action: string | null }[] = [
    {
      title: 'El Despertar de Guayaquil',
      description: 'Amanece en Guayaquil y el alcalde Abdala Bucaram se prepara para un nuevo día de gobierno.',
      action: 'welcomeMessage'
    },
    {
      title: 'La Revolución Culinaria',
      description: 'El alcalde anuncia su nueva política: renombrar las calles con nombres de platos típicos.',
      action: 'getAlias'
    },
    {
      title: 'El Gran Festín',
      description: 'Bucaram organiza un festival gastronómico en el Malecón 2000 Sabores.',
      action: null
    }
  ];

  constructor(
    private mayorService: MayorService,
    private artistService: ArtistService,
    private chef1Service: Chef1Service,
    private chef2Service: Chef2Service,
    private chef3Service: Chef3Service,
    private doctorService: DoctorService,
    private doctor2Service: Doctor2Service,
    private engineerService: EngineerService,
    private police1Service: Police1Service,
    private police2Service: Police2Service,
    private police3Service: Police3Service,
    private police4Service: Police4Service,
    private police5Service: Police5Service,
    private teacher1Service: Teacher1Service,
    private teacher2Service: Teacher2Service) { }

  ngOnInit(): void {
    this.mayor = this.mayorService.getMayor();
    this.artist = this.artistService.getArtist();
    this.chef1 = this.chef1Service.getChef();
    this.chef2 = this.chef2Service.getChef();
    this.chef3 = this.chef3Service.getChef();
    this.doctor = this.doctorService.getDoctor();
    this.doctor2 = this.doctor2Service.getDoctor();
    this.engineer = this.engineerService.getEngineer();
    this.police1 = this.police1Service.getPolice1();
    this.police2 = this.police2Service.getPolice2();
    this.police3 = this.police3Service.getPolice3();
    this.police4 = this.police4Service.getPolice4();
    this.police5 = this.police5Service.getPolice5();
    this.teacher1 = this.teacher1Service.getTeacher1();
    this.teacher2 = this.teacher2Service.getTeacher2();
  }

  nextScene() {
    if (this.currentScene < this.scenes.length - 1) {
      this.currentScene++;
    }
  }

  previousScene() {
    if (this.currentScene > 0) {
      this.currentScene--;
    }
  }

  getSceneAction(): string {
    const action = this.scenes[this.currentScene].action;
    if (action) {
      switch (action) {
        case 'welcomeMessage':
          return this.mayor.welcomeMessage();
        case 'getAlias':
          return this.mayor.getAlias();
        default:
          return '';
      }
    }
    return '';
  }
  
}