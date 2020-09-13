import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  apiKey = 'b2907782d07859a652052d3bae537475';

  constructor(
    private http: HttpClient
  ) { }

  getTopRated(page: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=${page}`);
  }

  getAllMovies(value: string, page: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${value}&language=en-US&page=${page}&include_adult=true`);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}`);
  }

}
