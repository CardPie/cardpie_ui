import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {injectAPI} from 'libs/auth/data-access/src/lib/APIConfigs/api';
import {UserInforRes} from '../models/user.model';
import {DetailFolder, FolderRes} from '../models/folder.model';

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  private readonly apiDomain = injectAPI();

  USER_INFORMATION_URL = `${this.apiDomain}/account/information`;
  FOLDER_OF_USER = `${this.apiDomain}/folder/own-folder`;
  DETAIL_FOLDER = `${this.apiDomain}/folder`;
  DELETE_FOLDER = `${this.apiDomain}/folder`;
  constructor(private httpClient: HttpClient) {}

  getUserInfor() {
    return this.httpClient.get<UserInforRes>(this.USER_INFORMATION_URL);
  }

  getFolderOfUser() {
    return this.httpClient.get<FolderRes>(this.FOLDER_OF_USER);
  }
  getFolderDetail(id: string | null) {
    const url = this.DETAIL_FOLDER + '/' + id;
    return this.httpClient.get<DetailFolder>(url);
  }
  deleteFolder(id: string) {
    const url = this.DELETE_FOLDER + '/' + id;
    return this.httpClient.delete(url);
  }
}
