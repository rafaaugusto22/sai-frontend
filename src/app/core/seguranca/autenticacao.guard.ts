import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import { UtilService } from 'src/app/shared/util.service';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(private router: Router, private autenticacaoService: AutenticacaoService, private utilService: UtilService) {}

  private allowed(route: ActivatedRouteSnapshot) {
    if (route && route.data.breadcrumb) {
      const f = this.utilService.getFuncionalidade(route.data.breadcrumb);
      return !f.roles || (this.autenticacaoService.hasOneRole(f.roles));
    }
    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.allowed(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.allowed(route);
  }

  canDeactivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.allowed(route);
  }

  canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.allowed(route);
  }
}
