import { Component, OnInit } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [
    HeroComponent
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
