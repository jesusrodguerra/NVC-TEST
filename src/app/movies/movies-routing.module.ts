import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesMainComponent } from './movies-main/movies-main.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesMainComponent
  },
  {
    path: ':id',
    component: MoviesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
