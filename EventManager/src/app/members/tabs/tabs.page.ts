import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {NotificationService} from '../../services/notification.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  notification_count: Number;
  subscription: Subscription;
  constructor(private authService: AuthenticationService, private notificationService: NotificationService) {
    this.subscription = notificationService.increaseAnnounced$.subscribe(
        res => {
          this.notification_count = res as Number;
        }
    );
  }


  ngOnInit() {
  }

}
