import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {injectAPI} from 'libs/auth/data-access/src/lib/APIConfigs/api';
import {DeskRes} from '../models/desk.model';

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  private readonly apiDomain = injectAPI();

  RECOMMEND_DESK_URL = `${this.apiDomain}/deck/recommend`;
  MOST_COMMON_DESK_URL = `${this.apiDomain}/deck?order_by=View desc`;
  constructor(private httpClient: HttpClient) {}

  getRecommendDesk() {
    return this.httpClient.get<DeskRes>(this.RECOMMEND_DESK_URL);
  }

  getMostCommonDesk() {
    return this.httpClient.get<DeskRes>(this.MOST_COMMON_DESK_URL);
  }
}
