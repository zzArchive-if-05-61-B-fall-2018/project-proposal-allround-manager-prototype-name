import { Component , OnInit} from '@angular/core';
import {EventHandlerService} from '../../services/event-handler.service';
import {NotificationService} from '../../services/notification.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: [string] = [''];
  constructor(private eventHandler: EventHandlerService, private notificationService: NotificationService) {

  }

  ngOnInit(): void {
    this.getOpenedNotifications()
        .then(
            res => {
              this.notificationService.increase(this.notifications.length);
            }
        );
  }

  ionViewWillEnter () {
    this.getOpenedNotifications()
        .then(
            res => {
              this.notificationService.increase(this.notifications.length);
            }
        );
  }

  async getOpenedNotifications () {
    await this.eventHandler.getInvitation().subscribe(res => {
      this.notifications = res['notifications'];
    });
  }
  reload() {
      console.log('Close');
      this.getOpenedNotifications()
          .then(
              res => {
                  this.notificationService.increase(this.notifications.length);
              }
          );
  }
}
