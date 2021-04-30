import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  


  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {
  }

  deleteMovie(id: number) {
    
  }

}