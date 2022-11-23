import {BranchService} from '../services/branch.service';
import {FormField} from './common.model';
import {Branch} from './branch.model';
import {HttpClient} from '@angular/common/http';

export interface User {
  id?: string;
  name: string;
  username: string;
  password: string;
  dateOfBirth: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  ssn: string;
  branchId: string;
  roles?: string[];
}

export const CLIENT: User = {
  name: 'Zara',
  username: 'Efendic',
  password: '432424234242323',
  dateOfBirth: '23.12.1994',
  state: 'Sarajevo',
  city: 'Sarajevo',
  address: 'Kranjceviceva 26',
  phone: '06111111',
  email: 'test@etf.unsa.ba',
  ssn: 'LAS4543534',
  branchId: 'branchId',
};

export const UserFormFields: FormField[] = [
  {
    inputType: 'text',
    key: 'name',
    label: 'Name'
  },
  {
    inputType: 'text',
    key: 'username',
    label: 'Username'
  },
  {
    inputType: 'text',
    key: 'password',
    label: 'Password'
  },
  {
    inputType: 'text',
    key: 'dateOfBirth',
    label: 'Date of Birth'
  },
  {
    inputType: 'text',
    key: 'state',
    label: 'State'
  },
  {
    inputType: 'text',
    key: 'city',
    label: 'City'
  },
  {
    inputType: 'text',
    key: 'address',
    label: 'Address'
  },
  {
    inputType: 'text',
    key: 'phone',
    label: 'Phone'
  },
  {
    inputType: 'text',
    key: 'email',
    label: 'Email'
  },
  {
    inputType: 'text',
    key: 'ssn',
    label: 'SSN'
  },
]

export enum UserFormKeys {
  name = 'Name',
  username = 'Username',
  password = 'Password',
  dateOfBirth = 'Date of Birth',
  state = 'State',
  city = 'City',
  address = 'Address',
  phone = 'Phone',
  email = 'Email',
  ssn = 'SSN',
  branchId = 'Branch',
}

export interface Permission {
  id: string;
  value: string;
}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export const BranchFormFields: FormField[] = [
  {
    inputType: 'text',
    key: 'city',
    label: 'City'
  },
  {
    inputType: 'text',
    key: 'address',
    label: 'Address'
  }
]
