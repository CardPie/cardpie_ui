import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotfoundpageComponent} from './notfoundpage/notfoundpage.component';
import {Route, RouterModule} from '@angular/router';

const NotFound: Route[] = [{path: '', component: NotfoundpageComponent}];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(NotFound)],
  declarations: [NotfoundpageComponent],
  exports: [NotfoundpageComponent],
})
export class NotfoundpageModule {}
