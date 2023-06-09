import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
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
  @ViewChild('containerRef', {static: false})
  containerRef!: ElementRef<HTMLDivElement>;
  container!: HTMLDivElement;
  constructor(
    private learngSerivce: LearningService,
    private renderer: Renderer2,
  ) {}
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

  ngAfterViewInit(): void {
    this.container = this.containerRef.nativeElement;
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
