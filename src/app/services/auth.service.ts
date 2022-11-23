import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  key = localStorage.key(2);
  roles: string[];
  permissions: any;

  constructor(private userService: UserService) {
    this.roles = ['Admin', 'Manager'];

    this.permissions = userService.getCurrentUser().pipe(
      map(response => response.data.roles.map(role => role.permissions)),
    );
  }

  getRoles(): string[] {
    return this.roles;
  }

  getPermissions(): any {
    return this.permissions;
  }
}
