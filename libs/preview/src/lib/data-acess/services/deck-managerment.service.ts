import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {injectAPI} from 'libs/auth/data-access/src/lib/APIConfigs/api';
import {IDeckRes} from '../models/deck.model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private readonly apiDomain = injectAPI();

  DECKS_OF_USER = `${this.apiDomain}/deck/`;
  constructor(private httpClient: HttpClient) {}

  getDecksOfUser(deck_id: string | null) {
    return this.httpClient.get<IDeckRes>(this.DECKS_OF_USER + `${deck_id}`);
  }
}
