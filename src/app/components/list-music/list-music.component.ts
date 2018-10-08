import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchResults } from '../../models/search-results.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {
  results;
  trackId;
  nextAudio = new Audio();

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.results = this.search.sharedData;
    console.log('Data: ', this.results);
    this.trackId = this.search.trackId;
    console.log(this.trackId);
    this.playTrack(this.trackId);
  }

  playTrack(id) {
    console.log('id play: '+id);
    let img = this.results.results[id].artworkUrl100;
    (document.getElementById('img-album') as HTMLImageElement).src = img;
    // let img = document.getElementById('img-album')
    // img.setAttribute('src', `${this.results.results[id].artworkUrl100}`);

    let song = this.results.results[id].previewUrl;
    // console.log(song);
    // (document.getElementById('source-track') as HTMLAudioElement).src = song;
    this.nextAudio.src = song;
    if (this.nextAudio.currentSrc != this.nextAudio.src) {
      this.nextAudio.remove();
    }
    this.nextAudio.controls;
    this.nextAudio.load();
    this.nextAudio.play();
    // document.getElementById("source-track").setAttribute('src', song);
    // let audio = xdocument.getElementsByTagName('audio');
    // audio[0].autoplay = true;
    // console.log(audio);
  }


}