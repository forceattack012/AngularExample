import { Injectable } from '@angular/core';
import { Heros } from '../Mock/MockHero';
import { Hero } from 'src/models/hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros() : Hero[] {
    return Heros;
  }
}
