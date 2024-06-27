import { Injectable } from '@angular/core';
import { Superhero } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private hero: Superhero;

  constructor() {
    this.hero = new Superhero(
      'Bruce Wayne',
      'Batman',
      ['Detective skills', 'Martial arts', 'Gadgets'],
      'Gotham City'
    );
  }

  getHero(): Superhero {0
    return this.hero;
  }

  fightCrime(): string {
    return this.hero.fightCrime();
  }

  displayPowers(): string {
    return this.hero.displayPowers();
  }
}