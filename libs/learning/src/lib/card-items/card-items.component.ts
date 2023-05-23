import {Component, Input} from '@angular/core';
import {Desk} from '../data-access/models/desk.model';
@Component({
  selector: 'exe-project-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export class CardItemsComponent {
  @Input() desk!: Desk;
}
