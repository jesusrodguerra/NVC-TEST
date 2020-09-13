import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataMoviesService } from 'src/app/data-movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {

  movieID;
  image = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private route: ActivatedRoute,
    private dataMoviesService: DataMoviesService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      this.fetchMovieID(id);
      console.log(id);
   });
  }

  // tslint:disable-next-line: typedef
  fetchMovieID(id: string) {
    this.dataMoviesService.getMovie(id).subscribe(movieID => {
      this.movieID = movieID;
      console.log(movieID);
    });
  }

}
