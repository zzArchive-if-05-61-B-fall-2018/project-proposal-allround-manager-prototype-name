import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { EventHandlerService} from '../../services/event-handler.service';
import { Event} from '../../interfaces/event';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
})

export class EventsPage implements OnInit {
  results: Observable<Object>;

  constructor(private handler: EventHandlerService) {}

  ngOnInit(): void {
    this.getEventsFromApi();
  }

  getEventsFromApi() {
    this.handler.getEvents().subscribe( res => {
       this.results = res['events'];
       console.log(this.results);
    });
  }

  update() {
    this.getEventsFromApi();
  }
}
