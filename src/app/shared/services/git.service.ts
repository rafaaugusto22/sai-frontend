import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService {

 constructor(private http: HttpClient) {
  }


  private baseUrl = environment.serverUrl;

  private pathUrl = this.baseUrl + '/git';

  cadastrarGrupoRepoExcel(data): Observable<any> {

    return this.http.post(this.pathUrl + '/cadastrarGrupoRepoExcel', data, {
    responseType: "blob"
  }).pipe();
  }

  cadastrarUsuarioRepositorioExcel(data): Observable<any> {

    return this.http.post(this.pathUrl + '/cadastrarUsuarioEmGruposExcel', data, {
    responseType: "blob"
  }).pipe();
  }

}
