import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchResults } from '../../models/search-results.model';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {
  results: SearchResults;
  trackId;

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.results = this.search.sharedData;
    console.log(this.results);
    this.trackId = this.search.trackId;
    console.log(this.trackId);
  }

}
