import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable,from } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';
import { finalize, mergeMap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private autenticacaoService: AutenticacaoService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const kc = this.autenticacaoService.getKc();

    if (kc) {
      return this.getToken().pipe(
        mergeMap((token) => {
          if (token) {
            req = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
          }
          return next.handle(req);
        }));
    }
    return next.handle(req);
  }

  getToken() {
    const tokenPromise: Promise<string> = new Promise<string>((resolve, reject) => {
      const kc = this.autenticacaoService.getKc();
      if (kc.token) {
        kc
          .updateToken(5)
          .success(() => {
            resolve(<string>kc.token);
          })
          .error(() => {
            reject('Erro ao atualizar o token de acesso.');
          });
      } else {
        reject('Usuário não autenticado.');
      }
    });

    const tokenObservable: Observable<string> = from(tokenPromise);

    return tokenObservable;
  }

}
