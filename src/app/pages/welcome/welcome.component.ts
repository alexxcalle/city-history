import { Component, OnInit } from '@angular/core';
import { HistoryComponent } from '../../components/history/history.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [
  HistoryComponent
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
