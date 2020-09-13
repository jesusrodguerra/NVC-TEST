import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesMainComponent } from './movies-main/movies-main.component';
import { MoviesChildComponent } from './movies-child/movies-child.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [MoviesMainComponent, MoviesChildComponent, MoviesDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    InfiniteScrollModule
  ]
})
export class MoviesModule { }
