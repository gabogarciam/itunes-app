import { Component, OnInit } from '@angular/core';
import { SearchResults } from '../../models/search-results.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term : String;
  results;

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  submitSearch() {
    // debugger
    this.search.searchMusic(this.term).subscribe( res => {
      this.results = res;
      console.log(this.results);
      this.search.sharedData = this.results;
    })
  }

  orderByTime() {
    let array = this.results.results;
    array.sort((a,b) => {
      return a.trackTimeMillis - b.trackTimeMillis;
    });
  }

  orderByGenre() {
    let array = this.results.results;
    array.sort((a,b) => {
      return a.primaryGenreName - b.primaryGenreName;
    });
    console.log('Complet ???');
  }

  orderByPrice() {
    let array = this.results.results;
    array.sort((a,b) => {
      return a.trackPrice - b.trackPrice;
    });
  }

  getId(id) {
    this.search.trackId = id;
  }

}
