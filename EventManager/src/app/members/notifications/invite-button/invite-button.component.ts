import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventHandlerService} from '../../../services/event-handler.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'invite-button',
  templateUrl: './invite-button.component.html',
  styleUrls: ['./invite-button.component.scss'],
})
export class InviteButtonComponent implements OnInit {
  selected = false;
  event?: Event;
  @Input() eventID;
  @Output() close = new EventEmitter();
  constructor(private eventService: EventHandlerService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.eventService.getEvent(this.eventID).subscribe(
        res => {
          this.event = res as Event;
        }
    );
  }

  acceptEvent() {
    this.eventService.joinEvent(this.eventID, this.authService.user.id);
    this.onClose();
  }

  refuseEvent() {
     this.eventService.removeInvitation(this.eventID);
     this.onClose();
  }

  onClose() {
    this.close.emit(null);
  }
}
