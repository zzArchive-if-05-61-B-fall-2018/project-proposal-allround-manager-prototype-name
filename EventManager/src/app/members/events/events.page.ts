import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { EventHandlerService} from '../../services/event-handler.service';
import { Event} from '../../interfaces/event';
import {Router} from '@angular/router';
import {EventsPageModule} from './events.module';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
})

export class EventsPage implements OnInit {
  results: Observable<Object>;

  constructor(private handler: EventHandlerService, private router: Router) {}

  ngOnInit(): void {
    this.getEventsFromApi();
  }

  getEventsFromApi() {
    this.handler.getEvents().subscribe( res => {
       this.results = res['events'];
       console.log(this.results);
    });
  }
  createEvent() {
    this.router.navigate(['members', 'tabs' , 'tabs', 'events', 'create']);
  }
  update() {
    this.getEventsFromApi();
  }
}
