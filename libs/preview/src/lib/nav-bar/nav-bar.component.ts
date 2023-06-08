import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'exe-project-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/folders']);
  }
}
