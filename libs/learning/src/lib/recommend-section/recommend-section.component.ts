import {
  Component,
  OnDestroy,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
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
export class RecommendSectionComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  recommendDeskList: Desk[] = [];
  totalDesk: number = 0;
  subscription!: Subscription;
  @ViewChild('containerRef', {static: false})
  containerRef!: ElementRef<HTMLDivElement>;
  container!: HTMLDivElement;

  constructor(
    private learngSerivce: LearningService,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.subscription = this.learngSerivce
      .getRecommendDesk()
      .pipe(take(1))
      .subscribe((data) => {
        this.totalDesk = data.total_count;
        this.recommendDeskList = data.data;
      });
  }

  ngAfterViewInit(): void {
    this.container = this.containerRef.nativeElement;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  scrollContainer(direction: 'back' | 'forth') {
    const containerElement = this.containerRef.nativeElement;
    const scrollAmount = direction === 'back' ? -500 : 500;
    const currentPosition = containerElement.scrollLeft;
    const newPosition = currentPosition + scrollAmount;

    containerElement.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  }
}
