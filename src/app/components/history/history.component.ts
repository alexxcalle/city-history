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

interface Scene {
  title: string;
  description: string;
  character?: any;
  action?: () => string;
}

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

  currentSceneIndex: number = 0;
  scenes: Scene[] = [];

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
    this.scenes = [
      {
        title: 'El Despertar de Guayaquil Loco',
        description: 'Amanece en Guayaquil y el alcalde Abdala Bucaram se prepara para un nuevo día de gobierno.',
        character: this.mayor,
        action: () => this.mayor.welcomeMessage()
      },
      {
        title: 'La Revolución Culinaria',
        description: 'El chef más famoso de la ciudad se entera de los planes del alcalde para renombrar las calles con platos típicos.',
        character: this.chef1,
        action: () => this.chef1.prepareSignatureDish()
      },
      {
        title: 'El Mural Gastronómico',
        description: 'Un artista local es contratado para pintar un mural que represente la nueva identidad culinaria de la ciudad.',
        character: this.artist,
        action: () => this.artist.createMasterpiece()
      },
      {
        title: 'Emergencia en el Festival',
        description: 'Durante el festival gastronómico, un ciudadano sufre una indigestión y requiere atención médica urgente.',
        character: this.doctor,
        action: () => this.doctor.diagnose()
      },
      {
        title: 'Orden en el Caos',
        description: 'La policía debe mantener el orden mientras las calles se llenan de gente celebrando la nueva identidad de la ciudad.',
        character: this.police1,
        action: () => this.police1.patrol()
      },
      {
        title: 'Educación Gastronómica',
        description: 'Una maestra decide incorporar la nueva temática de la ciudad en sus lecciones de historia local.',
        character: this.teacher1,
        action: () => this.teacher1.teach()
      },
      {
        title: 'El Gran Festín',
        description: 'Bucaram organiza un festival gastronómico en el Malecón 2000 Sabores, reuniendo a todos los personajes.',
        character: this.mayor,
        action: () => this.mayor.getAlias()
      }
    ];
  }

  get currentScene(): Scene {
    return this.scenes[this.currentSceneIndex];
  }

  nextScene() {
    if (this.currentSceneIndex < this.scenes.length - 1) {
      this.currentSceneIndex++;
    }
  }

  previousScene() {
    if (this.currentSceneIndex > 0) {
      this.currentSceneIndex--;
    }
  }

  getSceneAction(): string {
    return this.currentScene.action ? this.currentScene.action() : '';
  }
}