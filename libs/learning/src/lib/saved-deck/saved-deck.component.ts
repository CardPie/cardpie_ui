import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {Desk} from '../data-access/models/desk.model';
import {Subscription, take} from 'rxjs';
import {LearningService} from '../data-access/services/learning.service';

@Component({
  selector: 'exe-project-saved-deck',
  templateUrl: './saved-deck.component.html',
  styleUrls: ['./saved-deck.component.scss'],
})
export class SavedDeckComponent implements OnInit, OnDestroy {
  savedDeck: Desk[] = [];
  totalDeck: number = 0;
  subscription!: Subscription;
  @ViewChild('containerRef', {static: false})
  containerRef!: ElementRef<HTMLDivElement>;
  container!: HTMLDivElement;
  constructor(private learngSerivce: LearningService) {}
  ngOnInit(): void {
    this.subscription = this.learngSerivce
      .getSavedDeck()
      .pipe(take(1))
      .subscribe((data) => {
        this.totalDeck = data.total_count;
        this.savedDeck = data.data;
      });
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
