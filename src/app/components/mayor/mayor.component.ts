import { Component, OnInit } from '@angular/core';
import { Mayor } from '../../models/mayor.model';
import { MayorService } from '../../services/mayor.service';

@Component({
  selector: 'app-mayor',
  standalone: true,
  imports: [],
  templateUrl: './mayor.component.html',
  styleUrl: './mayor.component.css'
})

export class MayorComponent implements OnInit {

  mayor!: Mayor;
  welcomeMessage!: string;
  constructor(private mayorService: MayorService) {}

  ngOnInit(): void {
    this.mayor = this.mayorService.getMayor();

    this.welcomeMessage = this.mayorService.welcomeMessage();
  }

}
