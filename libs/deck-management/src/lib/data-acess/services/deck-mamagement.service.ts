import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {injectAPI} from 'libs/auth/data-access/src/lib/APIConfigs/api';
import {UserInforRes} from '../models/user.model';
import {FolderRes} from '../models/folder.model';
import {createNewDeck} from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private readonly apiDomain = injectAPI();

  CREATE_NEW_DECK = `${this.apiDomain}/deck`;

  constructor(private httpClient: HttpClient) {}

  createNewDeck(createNewDeck: createNewDeck) {
    return this.httpClient.post<any>(this.CREATE_NEW_DECK, createNewDeck);
  }
}
