import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
