import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { DeckService } from '../data-acess/services/deck-managerment.service';
import { ActivatedRoute } from '@angular/router';
import { IFlashCard } from '../data-acess/models/deck.model';

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
  ) { }
  total_card: number = 0;
  folder_name!: string;
  deck_name!: string;
  listFlashCard!: IFlashCard[]


  id!: string | null;
  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    try {
      const data = await this.deckService.getDecksOfUser(this.id).pipe(take(1)).toPromise();
      if (data?.data) {
        this.total_card = data.data.total_card;
        this.deck_name = data.data.folder_name;
        this.folder_name = data.data.folder_name
        this.listFlashCard = data.data.list_flash_cards
      }
    } catch (error) {
      console.error('Error while fetching data from API:', error);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
