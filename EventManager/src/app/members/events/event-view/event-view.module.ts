import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventViewPage } from './event-view.page';
import {ParticipentcomponentComponent} from './participentcomponent/participentcomponent.component';

const routes: Routes = [
  {
    path: '',
    component: EventViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventViewPage, ParticipentcomponentComponent],
  entryComponents: [ParticipentcomponentComponent]
})
export class EventViewPageModule {}
