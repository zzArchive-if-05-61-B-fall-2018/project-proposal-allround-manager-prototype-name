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
      console.log(event.description);
    return this.http.post(`${environment.url}/api/event/create`,
        {
                event_name: event.event_name,
                date: event.date,
                event_dis: event.description,
                adminId: this.apiService.user.id,
        });
  }
  getEvent(id) {
    return this.http.post(`${environment.url}/api/event/eventById`, { id: id});
  }
  getEvents() {
    return this.http.post(`${environment.url}/api/event`, {id: this.apiService.user.id});
  }

  inviteUser(email, eventId) {
      return this.http.post(`${environment.url}/api/event/notificate`, {email: email, eventId: eventId});
  }

    getInvitation() {
      return this.http.post(`${environment.url}/api/event/getNotifications`,{userId: this.apiService.user.id});
  }

    joinEvent(eventID: any, id: number | string) {
        return this.http.post(`${environment.url}/api/event/joins`,{userID: id, eventID: eventID});
    }

    removeInvitation(eventID: any) {
        
    }
}
