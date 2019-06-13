import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../../interfaces/user';
import {EventHandlerService} from '../../../services/event-handler.service';
import {NavController} from '@ionic/angular';
import {EventsPage} from '../events.page';
import {UpdateEventsService} from '../../../services/update-events.service';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  private user: User;
  subscription: Subscription;
  constructor(private eventHandler: EventHandlerService, private navController: NavController, private  updateService: UpdateEventsService) { }

  ngOnInit() {
  }
  createEvent(event) {
    this.eventHandler.createEvent(event.value).subscribe(res => {
      this.updateService.create(res);
      this.navController.pop();
    });
  }
}
