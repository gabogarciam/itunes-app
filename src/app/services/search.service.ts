import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResults } from '../models/search-results.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = 'https://itunes.apple.com/search?';
  trackId = null;
  sharedData = null;

  constructor(private http: HttpClient) { }

  searchMusic(term: String): Observable<SearchResults> {
    // debugger
    return this.http.jsonp<SearchResults>(`${this.baseUrl}media=music&term=` + term, 'callback');
  }
}
