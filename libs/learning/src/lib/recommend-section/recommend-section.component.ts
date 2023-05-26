import {Component, OnDestroy, OnInit} from '@angular/core';
import {Desk} from '../data-access/models/desk.model';
import {LearningService} from '../data-access/services/learning.service';
import {take} from 'rxjs/operators';
import {DestroyService} from 'libs/shared/services/destroy.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'exe-project-recommend-section',
  templateUrl: './recommend-section.component.html',
  styleUrls: ['./recommend-section.component.scss'],
  providers: [DestroyService],
})
export class RecommendSectionComponent implements OnInit, OnDestroy {
  recommendDeskList: Desk[] = [];
  totalDesk: number = 0;
  subscription!: Subscription;
  constructor(private learngSerivce: LearningService) {}
  ngOnInit(): void {
    this.subscription = this.learngSerivce
      .getRecommendDesk()
      .pipe(take(1))
      .subscribe((data) => {
        this.totalDesk = data.total_count;
        this.recommendDeskList = data.data;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
