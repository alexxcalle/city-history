import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';
import { Gender } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artist: Artist;

  constructor() {
    this.artist = new Artist(
      'Pablo Quizpe',
      91,
      Gender.Female,
      "Calle 13, Guayaquil",
      231231234123,
      'Pintura'
    )
   }

  getArtist(): Artist{
    return this.artist;
  }

  createMasterpiece(): string {
    return 'Guayasamin';
  }

  getArtForm(): string {
    return this.artist.artForm;
  }
}
