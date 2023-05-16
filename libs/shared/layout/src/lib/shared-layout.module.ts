import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SharedLayoutRoutingModule} from './shared-layout-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SharedLayoutRoutingModule)],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedLayoutModule {}
