import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, take } from "rxjs";
import { DeckService } from '../data-acess/services/deck-managerment.service';

@Component({
  selector: 'exe-project-deck-preview',
  templateUrl: './deck-preview.component.html',
  styleUrls: ['./deck-preview.component.scss'],
})
export class DeckPreviewComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor(private deckService: DeckService) { }
  total_card: number = 0;
  deck_name!: string;
  ngOnInit(): void {
    this.subscription = this.deckService
    .getDecksOfUser('2bcb9628-f0f9-4b36-a4a2-7584acdfcb3b')
    .pipe(take(1))
    .subscribe(
      (data) => (
        (this.total_card = data.data.total_card),(this.deck_name = data.data.name)
      ),
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
