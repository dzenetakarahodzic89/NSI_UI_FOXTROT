import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class HasRoleGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean
    | UrlTree>
    | Promise<boolean
    | UrlTree> | boolean
    | UrlTree {
      return route.data.roles.some(role => this.authService.getRoles().indexOf(role) >= 0);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return route.data.roles.some(role => this.authService.getRoles().indexOf(role) >= 0);;
  }
}
