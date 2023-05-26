import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, take} from 'rxjs';
import {DeckService} from '../data-acess/services/deck-managerment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exe-project-deck-preview',
  templateUrl: './deck-preview.component.html',
  styleUrls: ['./deck-preview.component.scss'],
})
export class DeckPreviewComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor(
    private deckService: DeckService,
    private route: ActivatedRoute,
  ) {}
  total_card: number = 0;
  deck_name!: string;
  id!: string | null;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.deckService
      .getDecksOfUser(this.id)
      .pipe(take(1))
      .subscribe(
        (data) => (
          (this.total_card = data.data.total_card),
          (this.deck_name = data.data.name)
        ),
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
