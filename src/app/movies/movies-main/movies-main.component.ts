import { Component, OnInit } from '@angular/core';
import { DataMoviesService } from '../../data-movies.service';

const nisPackage = require('../../../../package.json');

@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.scss']
})
export class MoviesMainComponent implements OnInit {

  actualPage = 1;

  searchWord;
  movies;

  throttle = 300;
  scrollDistance = 1;
  direction = '';

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  constructor(
    private data: DataMoviesService
    // this.appendItems(0, this.sum);
  ) { }

  ngOnInit(): void {
    this.fetchTopRated(this.actualPage);
  }

  // tslint:disable-next-line: typedef
  fetchMovies(value, page) {
    this.data.getAllMovies(value, page).subscribe(movies => {
      if (page === 1) {
        this.movies = movies.results;
      } else {
        this.movies = [...this.movies, ...movies.results];
      }
      console.log(movies.results);
    }, (error) => {
      console.log(error);
      alert("Can't Find the information, try again later");
    });
  }

  fetchTopRated(page) {
    this.data.getTopRated(page).subscribe(topRated => {
      if (page === 1) {
        this.movies = topRated.results;
      } else {
        this.movies = [...this.movies, ...topRated.results];
      }
      console.log(topRated);
    }, (error) => {
      console.log(error);
      alert("Can't Find the information, try again later");
    });
  }

  // tslint:disable-next-line: typedef
  getData() {
    this.fetchMovies(this.searchWord, this.actualPage);
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    const otherPage = this.actualPage + 1;
    this.actualPage++;
    if (this.searchWord) {
      this.fetchMovies(this.searchWord, this.actualPage);
      console.log(this.actualPage);
    } else {
      this.fetchTopRated(otherPage);
    }
  }

}