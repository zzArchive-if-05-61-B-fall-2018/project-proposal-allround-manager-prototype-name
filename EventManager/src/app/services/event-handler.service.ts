import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Event} from '../interfaces/event';
import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';
import {Userjoin} from '../interfaces/userjoin';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  events: Event[];
  constructor(private http: HttpClient, private apiService: AuthenticationService) { }

  createEvent(event) {
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
    return this.http.post<Userjoin[]>(`${environment.url}/api/event`, {id: this.apiService.user.id});
  }

  inviteUser(email, eventId) {
      return this.http.post(`${environment.url}/api/event/notificate`, {email: email, eventId: eventId});
  }

    getInvitation() {
      return this.http.post(`${environment.url}/api/event/getNotifications`,{userId: this.apiService.user.id});
  }

  joinEvent(eventId: any, id: number | string) {
      this.http.post(`${environment.url}/api/event/removeNotification`, {userId: id, eventId: eventId}).subscribe(res =>{
          console.log('Remove Notification');
      });
      return this.http.post(`${environment.url}/api/event/confirm`, {userId: id, eventId: eventId});

  }

  removeInvitation(eventId: any, id: number | string) {
      return this.http.post(`${environment.url}/api/event/removeNotification`, {userId: id, eventId: eventId});
  }

    getParticipants(evendId: any) {
      return this.http.post(`${environment.url}/api/event/getParticipants`, {eventId: evendId});
    }
}
