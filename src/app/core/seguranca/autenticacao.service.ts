import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

declare const Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  private keycloakAuth: any;
  private roles = ['admin'];


  init(): Promise<any> {
    return new Promise((resolve, reject) => {
       
       this.keycloakAuth = new Keycloak(environment.configKeycloak);
       this.keycloakAuth.init({ onLoad: 'login-required' , loadUserProfileAtStartUp: true})
         .success(() => {
           resolve();
         })
         .error(() => {
           reject();
         });
       });
   }

  hasOneRole(roles:any) {
    for (let i in roles) {
      if (i) {
        i = roles[i];
        if (this.getKc().hasRealmRole(i)) {
          return true;
        }
      }
    }
    return false;
  }

  getKc() {
    return this.keycloakAuth;
  }

  getToken(): string {
    return this.keycloakAuth.token;
  }
  
  logout(): void {
    const uri = window.location.href.endsWith('/negado') ? window.location.origin : window.location.href;
    this.getKc().logout({'redirectUri': uri});
  }
  

}
