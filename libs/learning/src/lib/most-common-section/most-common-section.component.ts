import {Component, OnInit, OnDestroy} from '@angular/core';
import {Desk} from '../data-access/models/desk.model';
import {LearningService} from '../data-access/services/learning.service';
import {take} from 'rxjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'exe-project-most-common-section',
  templateUrl: './most-common-section.component.html',
  styleUrls: ['./most-common-section.component.scss'],
})
export class MostCommonSectionComponent implements OnInit, OnDestroy {
  mostCommonDeskList: Desk[] = [];
  totalDesk: number = 0;
  subscription!: Subscription;
  constructor(private learngSerivce: LearningService) {}
  ngOnInit(): void {
    this.subscription = this.learngSerivce
      .getMostCommonDesk()
      .pipe(take(1))
      .subscribe((data) => {
        this.mostCommonDeskList = data.data;
        this.totalDesk = data.total_count;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
