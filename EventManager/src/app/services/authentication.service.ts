import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Platform} from '@ionic/angular';
import { Storage} from '@ionic/storage';
import {User} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';
import {AuthGuard} from '../interfaces/auth-guard';
import {tap} from 'rxjs/operators';

const TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  AUTH_SERVER_ADDRESS  =  'http://localhost:3000';
  authenticationState = new BehaviorSubject(false);
  user: AuthGuard;

  constructor(private storage: Storage, private plt: Platform, private httpClient: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
  });
  }

  login(user: User): Observable<AuthGuard> {
    return this.httpClient.post( `${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
        tap( async (res: AuthGuard) => {
           if (res.user) {
            await this.storage.set('ACCESS_TOKEN', res.user.access_token);
            await  this.storage.set('EXPIRES_IN', res.user.expires_in);
            this.user = res;
            this.authenticationState.next(true);
          }
        })
    );
    /*return this.storage.set(TOKEN_KEY, 'Bearer 123456').then(res => {
      this.authenticationState.next(true);
    });*/
  }

  register(user: User): Observable<AuthGuard> {
    return this.httpClient.post<AuthGuard>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
        tap(async (res: AuthGuard ) => {
          if (res.user) {
            await this.storage.set('ACCESS_TOKEN', res.user.access_token);
            await this.storage.set('EXPIRES_IN', res.user.expires_in);
            this.user = res;
            this.authenticationState.next(true);
          }
        })
    );
  }
  async logout() {
    await this.storage.remove('ACCESS_TOKEN');
    await this.storage.remove('EXPIRES_IN');
    this.authenticationState.next(false);
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
        this.authenticationState.next(true);
      }
    });
  }
}
