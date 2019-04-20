import { Component } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../interfaces/user';
import {EventHandlerService} from '../../services/event-handler.service';
import {EventsPage} from '../events/events.page';

@Component({
  selector: 'app-groups',
  templateUrl: 'groups.page.html',
  styleUrls: ['groups.page.scss'],
})
export class GroupsPage {

  private user: User;

  constructor(private authService: AuthenticationService, private eventHandler: EventHandlerService) {
  }

  createEvent(event) {
    this.eventHandler.createEvent(event.value);
  }
}
