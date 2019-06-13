import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { EventHandlerService} from '../../services/event-handler.service';
import { Event} from '../../interfaces/event';
import {Router} from '@angular/router';
import {EventsPageModule} from './events.module';
import {UpdateEventsService} from '../../services/update-events.service';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
})

export class EventsPage implements OnInit {
  results: Object[];
  subscription: Subscription;
  constructor(private handler: EventHandlerService, private router: Router, private updateService: UpdateEventsService) {
    this.subscription = updateService.createAnnounced$.subscribe(
        res => {
          this.results = res['events'];
        }
    );
  }

  ngOnInit(): void {
    this.handler.getEvents().subscribe(res => {
      this.results = res['events'];
    });
  }

  createEvent() {
    this.router.navigate(['members', 'tabs' , 'tabs', 'events', 'create']);
  }
}
