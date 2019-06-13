import { Injectable } from '@angular/core';
import {EventHandlerService} from './event-handler.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventsService {

  private createAnnouncedSource = new Subject();

  createAnnounced$ = this.createAnnouncedSource.asObservable();
  constructor(private handler: EventHandlerService) { }

  create(res) {
    this.createAnnouncedSource.next(res);
  }
}
