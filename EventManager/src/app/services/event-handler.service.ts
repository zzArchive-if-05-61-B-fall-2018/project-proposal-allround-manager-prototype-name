import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Event} from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  event: Event;
  constructor(private http: HttpClient) { }

  createEvent(event): Observable<Event> {
    return null;
  }
}
