import { Component, OnInit } from '@angular/core';
import {Hero} from '../../models/hero'
import { Heros } from 'src/Mock/MockHero';
import { HeroService } from 'src/Service/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  messageFromHeros : string ="";
  hero : Hero = null;
  Heros : Hero [];
  selectHero : Hero;

  constructor(private heroService : HeroService) {
    this.Heros = this.heroService.getHeros();
   }

  ngOnInit() {

  }
  onSelect(item : Hero) : void {
    this.selectHero = item;
  }

}
