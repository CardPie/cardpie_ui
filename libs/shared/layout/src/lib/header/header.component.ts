import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'exe-project-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {
  isFixedHeader = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
