import { Injectable } from '@angular/core';
import { Role, User } from '../models/user.model';
import { Rol, Usr, Permission } from '../models/userlist.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common.model';
import { Subject } from "rxjs";
import { Guid } from 'guid-typescript';
import { MsalService } from '@azure/msal-angular';



const CLIENTS: any[] = [
  {
    id: '1',
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
    roles: []
  },
  {
    id: '2',
    name: 'Emina',
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
    roles: []
  },
  {
    id: '3',
    name: 'Ana',
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
    roles: []
  },
  {
    id: '4',
    name: 'Lejla',
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
    roles: []
  },
  {
    id: '5',
    name: 'Lejla',
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
    roles: []
  },
  {
    id: '6',
    name: 'Lejla',
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
    roles: []
  },
  {
    id: '7',
    name: 'Lejla',
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
    roles: []
  },
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rolesChanged = new Subject<Rol[]>();
  private listaRole: Rol[] = [];

  usersChanged = new Subject<Usr[]>();
  private listaUsera: Usr[] = [];

  perChanged = new Subject<Permission[]>();
  private listaPer: Permission[] = [];

  roles: Role[];
  usrs: Usr[];
  rols: Rol[];
  perms: Permission[];


  constructor(private http: HttpClient, private msalService: MsalService) {

  }

  setRoles(rola: Rol[]) {
    this.listaRole = rola;
    this.rolesChanged.next(this.listaRole.slice());

  }

  getRoles() {
    return this.listaRole.slice(); //sa ovim slice vraca se kopija fajla
  }

  setUsers(us: Usr[]) {
    this.listaUsera = us;
    this.usersChanged.next(this.listaUsera.slice());

  }

  getUsers() {
    return this.listaUsera.slice(); //sa ovim slice vraca se kopija fajla
  }

  setPers(p: Permission[]) {
    this.listaPer = p;
    this.perChanged.next(this.listaPer.slice());

  }

  getPers() {
    return this.listaPer.slice(); //sa ovim slice vraca se kopija fajla
  }

  getAllRoles() {
    return this.http.get<ApiResponse<Rol[]>>(
      'https://nsi-dev-api-foxtrot.azurewebsites.net/api/Role/getAll'
      //'https://localhost:44318/api/Role/getAll'
      , {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })//.subscribe(response=>this._rolls.next(response.data));

  }

  getAllUsersByRole(role: string): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(
      `https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/getUserByRole/${role}`
      //`https://localhost:44318/api/User/getUserByRole/${role}`
    );
  }

  getUser(id: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(
      `https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/${id}`,
      //`http://localhost:44318/api/User/${id}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
  }

  getCurrentUser() {
    return this.http.get<ApiResponse<any>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/me');
  }

  createNewUser(user: User) {
    return this.http.post<ApiResponse<User>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/User', user);
  }

  createNewClient(user: User) {
    return this.http.post<ApiResponse<User>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/createClient', user);
  }

  createNewEmployee(user: User) {
    return this.http.post<ApiResponse<User>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/createEmployee', user);
  }

  createNewManager(user: User) {
    return this.http.post<ApiResponse<User>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/createManager', user);
  }

  logout() {
    // localStorage.clear();
    this.msalService.logout();
    // window.location.href = "/"
    // this.http.get<ApiResponse<any>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/me', {
    //   headers: { 'No-Auth': 'True' }
    // })
  }
  getAllUsers(): Observable<ApiResponse<Usr[]>> {
    return this.http.get<ApiResponse<Usr[]>>(
      'https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/getAll',
      //'https://localhost:44318/api/User/getAll',
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });

  }

  getAllPermissions(): Observable<ApiResponse<Permission[]>> {
    return this.http.get<ApiResponse<Permission[]>>(
      'https://nsi-dev-api-foxtrot.azurewebsites.net/api/Permission/getAll',
      //'https://localhost:44318/api/Permission/getAll', 
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });

  }

  setNewRole(listaPermisija) {
    this.http.post('https://nsi-dev-api-foxtrot.azurewebsites.net/api/Role', listaPermisija).subscribe(response => { console.log(response); });
  }

  setExistRole(id: Guid, listaRole) {
    //console.log(`https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/roles/${id}`);
    this.http.put(
      `https://nsi-dev-api-foxtrot.azurewebsites.net/api/User/roles/${id}`
      //`https://localhost:44318/api/User/roles/${id}`
      , listaRole).subscribe(response => { console.log(response); });
  }

  setPermissionRole(id: Guid, listaRole) {
    this.http.put(`https://nsi-dev-api-foxtrot.azurewebsites.net/api/Role/${id}`, listaRole).subscribe(response => { console.log(response); });
  }

}
