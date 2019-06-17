import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import {path} from '@angular-devkit/core';
import {InviteButtonComponent} from './invite-button/invite-button.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: NotificationsPage}])
  ],
  declarations: [NotificationsPage, InviteButtonComponent],
  entryComponents: [InviteButtonComponent]
})
export class NotificationsPageModule {}
