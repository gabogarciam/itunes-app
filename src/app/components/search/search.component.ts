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
  results: SearchResults;

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  submitSearch() {
    // debugger
    this.search.searchMusic(this.term).subscribe( res => {
      this.results = res;
      this.search.sharedData = this.results;
      // console.log(this.results);
    })
  }

  orderByTime() {
    console.log('order By Time');
  }

  orderByGenre() {
    console.log('order By Genre');
  }

  orderByPrice() {
    console.log('order By Price');
  }

  idSong(id) {
    this.search.trackId = id;
  }

}
