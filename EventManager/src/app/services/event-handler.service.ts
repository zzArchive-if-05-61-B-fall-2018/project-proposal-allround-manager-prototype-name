import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Event} from '../interfaces/event';
import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  events: Event[];
  constructor(private http: HttpClient, private apiService: AuthenticationService) { }

  createEvent(event) {
    return this.http.post(`${environment.url}/api/event/create`, {id: this.apiService.user.id, name: event.name});
  }

  getEvents() {
    return this.http.post(`${environment.url}/api/event`, {id: this.apiService.user.id});
  }
}
