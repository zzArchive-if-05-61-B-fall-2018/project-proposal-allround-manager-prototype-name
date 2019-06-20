import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventHandlerService} from '../../../services/event-handler.service';
import {ModalController} from '@ionic/angular';
import {ParticipentcomponentComponent} from './participentcomponent/participentcomponent.component';
import {Event} from '../../../interfaces/event';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.page.html',
  styleUrls: ['./event-view.page.scss'],
})
export class EventViewPage implements OnInit {
  event: Event;
  showInfo = false;
  showInv: false;
  event_date: Date;
  participants: Object[] = [];

  constructor(private userService: AuthenticationService, private modalController: ModalController, private activeRoute: ActivatedRoute, private eventHandler: EventHandlerService) {
    this.activeRoute.paramMap.subscribe( paramMap => {
      const eventId = paramMap.get('eventId');
      this.eventHandler.getEvent(eventId).subscribe(res => {
        this.event = res as Event;
        this.event_date = new Date(this.event.date);
        this.getParticipants();
      });
    });
  }

  ngOnInit() {
  }

  inviteUser(user) {
    this.eventHandler.inviteUser(user.value.user_email, this.event._id).subscribe(
        res => {
          this.showInv = false;
        }
    );
  }
  getParticipants() {
      this.eventHandler.getParticipants(this.event._id).subscribe(
           async res => {
              this.participants = res as Object[];
              const pArray = this.participants.map(async user => {
                  const u = await this.userService.getUserPerId(user['userId']).toPromise();
                  return u;
              });
              const users = await Promise.all(pArray);
              this.participants = users as Object[];
          }
      );
  }
  async presentParticipantModal() {
    const modal = await this.modalController.create({
      component: ParticipentcomponentComponent,
        componentProps: {participants: this.participants}
    });
    return await modal.present();
  }
}
