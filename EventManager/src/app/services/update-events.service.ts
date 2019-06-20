import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventsService {

  private createAnnouncedSource = new Subject();

  createAnnounced$ = this.createAnnouncedSource.asObservable();
  constructor() { }

  create(res) {
    this.createAnnouncedSource.next(res);
  }
}
