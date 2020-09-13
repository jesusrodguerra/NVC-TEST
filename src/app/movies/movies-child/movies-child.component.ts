import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-child',
  templateUrl: './movies-child.component.html',
  styleUrls: ['./movies-child.component.scss']
})
export class MoviesChildComponent implements OnInit {

  image = 'https://image.tmdb.org/t/p/w500';

  @Input() movies;
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
