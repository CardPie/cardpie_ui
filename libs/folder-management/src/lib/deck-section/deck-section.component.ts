
import {Component, Input, OnInit} from '@angular/core';
import {Desk, DetailFolder} from '../data-acess/models/folder.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'exe-project-deck-section',
  templateUrl: './deck-section.component.html',
  styleUrls: ['./deck-section.component.scss'],
})

export class DeckSectionComponent implements OnInit {
  @Input() deskList: Desk[] = [];
  @Input() folder!: DetailFolder;
  idFolder: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  createNewDesk() {
    const id = this.folder.data.id;
    this.router.navigate(['deck', id]);
  }
}

