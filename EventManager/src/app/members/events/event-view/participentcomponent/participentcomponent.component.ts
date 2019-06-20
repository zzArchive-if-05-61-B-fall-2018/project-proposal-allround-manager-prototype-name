import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-participentcomponent',
  templateUrl: './participentcomponent.component.html',
  styleUrls: ['./participentcomponent.component.scss'],
})
export class ParticipentcomponentComponent implements OnInit {

  @Input() participants: Object[];

  constructor(private modalController: ModalController) {
  }
  ngOnInit() {
  }
  async myDismiss() {
    await this.modalController.dismiss();
  }
}
