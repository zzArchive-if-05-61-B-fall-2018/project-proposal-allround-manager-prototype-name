import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private increaseAnnouncedSource = new Subject();

  increaseAnnounced$ = this.increaseAnnouncedSource.asObservable();
  constructor() { }

  increase(value) {
    this.increaseAnnouncedSource.next(value);
  }
}
