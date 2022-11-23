import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HasPermissionGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {
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
    return new Observable(observable => {
      this.authService.getPermissions().pipe(take(1)).subscribe(permissions => {
        const allowed = route.data.permissions.some(permission => permissions.reduce((acc, val) => ([...acc, ...val]), []).map(permission => permission.value).includes(permission));
        if (!allowed) {
          alert('Unauthorized!');
          this.router.navigateByUrl('/');
        }

        observable.next(allowed);
      });
    });
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable(observable => {
      this.authService.getPermissions().pipe(take(1)).subscribe(permissions => {
        const allowed = route.data.permissions.some(permission => permissions.reduce((acc, val) => ([...acc, ...val]), []).map(permission => permission.value).includes(permission));
        if (!allowed) {
          alert('Unauthorized!');
          this.router.navigateByUrl('/');
        }

        observable.next(allowed);
      });
    });
  }
}
