import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {injectAPI} from 'libs/auth/data-access/src/lib/APIConfigs/api';
import {DeskRes, CountView} from '../models/desk.model';
import {UserInforRes} from 'libs/folder-management/src/lib/data-acess/models/user.model';
import {FolderRes, INewFolder} from '../models/folder.model';
@Injectable({
  providedIn: 'root',
})
export class LearningService {
  private readonly apiDomain = injectAPI();

  RECOMMEND_DESK_URL = `${this.apiDomain}/deck/recommend`;
  MOST_COMMON_DESK_URL = `${this.apiDomain}/deck?order_by=View desc`;
  USER_INFORMATION_URL = `${this.apiDomain}/account/information`;
  SAVED_DECK_URL = `${this.apiDomain}/saved-deck`;
  COUNT_VIEW_URL = `${this.apiDomain}/deck/`;
  FOLDER_OF_USER = `${this.apiDomain}/folder/own-folder`;
  CREATE_NEW_FOLDER = `${this.apiDomain}/folder`;
  SEARCH_DECK = `${this.apiDomain}/deck?deck_name=`;
  constructor(private httpClient: HttpClient) {}

  getRecommendDesk() {
    return this.httpClient.get<DeskRes>(this.RECOMMEND_DESK_URL);
  }

  getMostCommonDesk() {
    return this.httpClient.get<DeskRes>(this.MOST_COMMON_DESK_URL);
  }
  getUserInfor() {
    return this.httpClient.get<UserInforRes>(this.USER_INFORMATION_URL);
  }
  getSavedDeck() {
    return this.httpClient.get<DeskRes>(this.SAVED_DECK_URL);
  }
  getFolderOfUser() {
    return this.httpClient.get<FolderRes>(this.FOLDER_OF_USER);
  }
  triggerCountView(id: string) {
    const url = this.COUNT_VIEW_URL + id + '/view';
    return this.httpClient.get<CountView>(url);
  }
  createNewFolder(folderName: INewFolder) {
    return this.httpClient.post<any>(this.CREATE_NEW_FOLDER, folderName);
  }
  getSearchDeck(deckNameQ: string) {
    const url = this.SEARCH_DECK + deckNameQ;
    return this.httpClient.get<DeskRes>(url);
  }
}
