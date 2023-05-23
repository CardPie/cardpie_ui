import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {folderManagementRoutes} from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(folderManagementRoutes),
    RouterModule.forChild(folderManagementRoutes),
  ],
})
export class FolderManagementModule {}
