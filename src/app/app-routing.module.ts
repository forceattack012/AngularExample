import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';

const routes : Routes = [
  { path : 'heros' ,component : HerosComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})


export class AppRoutingModule { }
