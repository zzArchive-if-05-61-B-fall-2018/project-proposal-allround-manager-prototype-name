import {Component, Injectable, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Observable} from 'rxjs';
import {AlertController, LoadingController} from '@ionic/angular';
import {colors} from '@angular-devkit/core/src/terminal';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  constructor(private authService: AuthenticationService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  public login(form) {
    this.showLoading();
    this.authService.login(form.value).subscribe((res) => {
      if (res) {
        this.loading.dismiss();
      } else {
        this.showError('These credentials do not match our records.');
      }
    },
    error => {
      this.loading.dismiss();
    });
  }

  async showLoading() {
    this.loading =  await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Loading...'
    });
    this.loading.present();
  }

  private showError(text: string) {
    this.loading.dismiss();
  }
}
