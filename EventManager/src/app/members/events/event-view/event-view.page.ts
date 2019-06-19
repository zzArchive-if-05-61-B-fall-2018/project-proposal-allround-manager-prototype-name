import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventHandlerService} from '../../../services/event-handler.service';
import {ModalController} from '@ionic/angular';
import {ParticipentcomponentComponent} from './participentcomponent/participentcomponent.component';
import {Event} from '../../../interfaces/event';

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
  constructor(private modalController: ModalController, private activeRoute: ActivatedRoute, private eventHandler: EventHandlerService) {
    this.activeRoute.paramMap.subscribe( paramMap => {
      const eventId = paramMap.get('eventId');
      this.eventHandler.getEvent(eventId).subscribe(res => {
        this.event = res as Event;
        console.log(this.event);
        this.event_date = new Date(this.event.date);
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

  async presentParticipentModal() {
    const modal = await this.modalController.create({
      component: ParticipentcomponentComponent,
      componentProps: {participants: this.event.event_participants}
    });
    return await modal.present();
  }
}
