import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResults } from '../models/search-results.model';

const API = {
  search : 'https://itunes.apple.com/search?'
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchMusic(term: String): Observable<SearchResults> {
    return this.http.jsonp<SearchResults>(`${API.search}entity=music&term` + term, 'callback');
  }
}
