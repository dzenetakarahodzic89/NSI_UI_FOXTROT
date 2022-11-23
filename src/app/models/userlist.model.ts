import {FormField} from './common.model';
import {HttpClient} from '@angular/common/http';
import { Guid } from 'guid-typescript';

export interface Usr {
    id :Guid,
      name: string,
      username: string,
      dateOfBirth?: string,
      state: string,
      city: string,
      address: string,
      phone: string,
      email: string,
      ssn: string,
      roles: Rol[]
}

export interface Permission {
  id?: Guid;
  value: string;
}

export interface Rol {
  id: Guid;
  name: string;
  permissions: Permission[];
}