import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResults } from '../models/search-results.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = 'https://itunes.apple.com/search?';

  constructor(private http: HttpClient) { }

  searchMusic(term: String): Observable<SearchResults> {
    console.log(this.http.jsonp<SearchResults>(`${this.baseUrl}country&;entity=musicArtist&term` + term, 'callback'));
    // debugger
    return this.http.jsonp<SearchResults>(`${this.baseUrl}country&;entity=musicArtist&term` + term, 'callback');
  }
}
