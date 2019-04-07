import {AuthenticationService} from './services/authentication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {User} from "./interfaces/user";
import {AuthGuard} from "./interfaces/auth-guard";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  user: AuthGuard;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        console.log(state);
        if (state) {
          this.router.navigate(['members', 'tabs']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
