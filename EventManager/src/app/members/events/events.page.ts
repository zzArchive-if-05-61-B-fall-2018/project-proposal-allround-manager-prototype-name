import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { EventHandlerService} from '../../services/event-handler.service';
import {Router} from '@angular/router';
import {UpdateEventsService} from '../../services/update-events.service';
import {Event} from '../../interfaces/event';
import {Userjoin} from '../../interfaces/userjoin';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
})

export class EventsPage implements OnInit {
  private results: Userjoin[];
  events: Event[];
  subscription: Subscription;
  constructor(private handler: EventHandlerService, private router: Router, private updateService: UpdateEventsService) {
    this.subscription = updateService.createAnnounced$.subscribe(
        res => {
          this.results = res as Userjoin[];
          this.getEvents().then(result => {
            this.events = result;
          });
        }
    );
  }

  ngOnInit(): void {
    this.handler.getEvents().subscribe( res => {
      this.results = res;
      console.log(res);
        this.getEvents().then(result => {
          console.log(result);
          this.events = result;
        });
      });
  }

  async getEvents () {
    const pArray = this.results.map( async join => {
      const event = await this.handler.getEvent(join.eventId).toPromise();
      return event;
    });
    const res = await Promise.all(pArray);
    return res as Event[];
  }
  createEvent() {
    this.router.navigate(['members', 'tabs' , 'tabs', 'events', 'create']);
  }
}
