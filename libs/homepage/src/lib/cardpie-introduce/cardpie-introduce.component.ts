import {Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'exe-project-cardpie-introduce',
  templateUrl: './cardpie-introduce.component.html',
  styleUrls: ['./cardpie-introduce.component.scss'],
  template: `<mat-icon svgIcon="cardpie-special"></mat-icon>`
})
export class CardpieIntroduceComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'cardpie-special',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/cardpie-special.svg')
    );
  }
}
