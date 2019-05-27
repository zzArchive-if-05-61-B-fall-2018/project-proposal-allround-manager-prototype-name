import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';
import {EventHandlerService} from '../../../services/event-handler.service';
import {NavController} from '@ionic/angular';
import {EventsPage} from '../events.page';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  private user: User;

  constructor(private eventHandler: EventHandlerService, private navController: NavController) { }

  ngOnInit() {
  }
  createEvent(event) {
    this.eventHandler.createEvent(event.value);
    this.navController.pop();
  }
}
