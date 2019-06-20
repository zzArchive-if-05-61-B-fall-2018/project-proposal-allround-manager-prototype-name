import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../interfaces/user';
import {AuthenticationService} from '../../../../services/authentication.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-participentcomponent',
  templateUrl: './participentcomponent.component.html',
  styleUrls: ['./participentcomponent.component.scss'],
})
export class ParticipentcomponentComponent implements OnInit {

  @Input() participants: Object[];

  public users: User[];
  constructor(private modalController: ModalController, private userService: AuthenticationService) {
  }

  ngOnInit() {
  }

  displayUser() {
 }

  async myDismiss() {
    await this.modalController.dismiss();
  }
}
