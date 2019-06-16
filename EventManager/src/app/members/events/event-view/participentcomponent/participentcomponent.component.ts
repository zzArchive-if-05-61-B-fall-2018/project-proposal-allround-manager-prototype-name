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

  @Input() participants: string[];

  public users: User[];
  constructor(private modalController: ModalController, private userService: AuthenticationService) {
  }

  ngOnInit() {
    console.log(this.participants);
    this.getUsers().then(
        users => this.users = users
    );
  }

  async getUsers() {
    const pArray = this.participants.map(async userId => {
      const res = await this.userService.getUserPerId(userId).toPromise();
      return res;
    });
    const users = await Promise.all(pArray);
    return users as User[];
  }

  displayUser() {
    console.log(this.users);
  }

  async myDismiss() {
    await this.modalController.dismiss();
  }
}
