import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';


const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreatePageModule'
  },
  {
    path: 'join',
    loadChildren: './join-event/join-event.module#JoinEventPageModule'
  },
  {
    path: ':eventId',
    loadChildren: './event-view/event-view.module#EventViewPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
