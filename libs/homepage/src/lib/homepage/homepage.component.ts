import {Component} from '@angular/core';
import {DestroyService} from 'libs/shared/services/destroy.service';
@Component({
  selector: 'exe-project-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [DestroyService],
})
export class HomepageComponent {}
