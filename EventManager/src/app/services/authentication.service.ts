import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Platform} from '@ionic/angular';
import { Storage} from '@ionic/storage';
import {User} from '../interfaces/user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthGuard} from '../interfaces/auth-guard';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Token} from '@angular/compiler';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  AUTH_SERVER_ADDRESS  =  environment.url;
  authenticationState = new BehaviorSubject(false);
  user = null;
  tok = null;

  constructor(private storage: Storage, private plt: Platform, private httpClient: HttpClient, private helper: JwtHelperService) {
    this.plt.ready().then(() => {
      this.checkToken();
  });
  }

  login(user) {
    return this.httpClient.post( `${this.AUTH_SERVER_ADDRESS}/api/auth/login`, user).pipe(
        tap( res => {
               this.storage.set(TOKEN_KEY, res['token']);
               this.user = res;
               this.tok = this.helper.decodeToken(res['token']);
               this.authenticationState.next(true);
        },
        error => error)
    );
    /*return this.storage.set(TOKEN_KEY, 'Bearer 123456').then(res => {
      this.authenticationState.next(true);
    });*/
  }

  register(user) {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/api/auth/register`, user).pipe(
        tap(res => {
            this.user = res['user'];
          this.authenticationState.next(true);
        })
    );
  }
  async logout() {
      this.storage.remove(TOKEN_KEY).then(() => {
          this.authenticationState.next(false);
      });
  }
  getSpecialData() {
        return this.user;
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }
  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        const decoded = this.helper.decodeToken(res);
        const isExpired = this.helper.isTokenExpired(res);
        if (!isExpired) {
            this.tok = decoded;
            this.authenticationState.next(true);
            this.user = decoded;
            console.log(this.user);
        } else {
            this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  getUserPerId(id) {
      return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/api/auth/user`, { id: id});
  }
}
