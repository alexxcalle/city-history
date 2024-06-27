import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../../services/superhero.service';
import { Superhero } from '../../models/citizen.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero!: Superhero;
  crimeMessage!: string;
  powersMessage!: string;

  constructor(private superheroService: SuperheroService) {}

  ngOnInit(): void {
    this.hero = this.superheroService.getHero();
    this.crimeMessage = this.superheroService.fightCrime();
    this.powersMessage = this.superheroService.displayPowers();
  }
}
