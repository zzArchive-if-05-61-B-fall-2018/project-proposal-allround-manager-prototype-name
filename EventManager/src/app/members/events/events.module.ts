import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';
import {CreatePage} from './create/create.page';


const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreatePageModule'
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
