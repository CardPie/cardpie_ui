import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {DeckService} from '../data-acess/services/deck-managerment.service';
import {IFlashCard} from '../data-acess/models/deck.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'exe-project-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        }),
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        }),
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class SlideCardComponent implements OnInit, OnDestroy {
  @Input() listFlashCard!: IFlashCard[];
  @Input() totalCards!: number;
  subscription!: Subscription;
  currentPage: number = 1;
  pagePosition: string = '0%';
  cardsPerPage!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  @ViewChild('container', {static: true, read: ElementRef})
  container!: ElementRef;
  @HostListener('window:resize') windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalCards) {
        this.currentPage = this.totalCards;
        this.populatePagePosition();
      }
    }
  }
  flip: string = 'inactive';

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }
  constructor(private deckService: DeckService) {}

  ngOnInit(): void {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalCards = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalCards * 100}% + ${
      this.totalCards * 10
    }px)`;
    this.cardWidth = `calc((${100 / this.totalCards}% - ${
      this.cardsPerPage * 10
    }px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${
      10 * (this.currentPage - 1)
    }px)`;
  }
  currentCardIndex: number = 0; // Chỉ số của card hiện tại

  nextCard() {
    if (this.currentCardIndex < this.listFlashCard.length - 1) {
      this.currentCardIndex++;
    }
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
  previousCard() {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
    }
  }
}
