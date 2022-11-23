import { Component, OnInit, Output } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Usr} from '../../models/userlist.model';
import {Rol} from '../../models/userlist.model';
import {ApiResponse} from '../../models/common.model';

@Component({
  selector: 'app-roles-and-permissions',
  templateUrl: './roles-and-permissions.component.html',
  styleUrls: ['./roles-and-permissions.component.css']
})


export class RolesAndPermissionsComponent implements OnInit {


  users: Usr[] =[];
  /*[
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Mirza",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic2@etf.unsa.ba",
      "ssn": "000000000",
      "roles": [
        {
          "id": "afbce795-7953-458c-916e-08d9b4dc3c4a",
          "name": "Admin",
          "permissions": [
            {
              "id": "9f97d183-bc65-4e5f-a3e7-0c2013fa63a7",
              "value": "Delete employees"
            },
            {
              "id": "36ad537e-db41-4354-9574-0fcd59f444c1",
              "value": "Own documents review"
            },
            {
              "id": "689aba58-c97a-4ed5-a6b2-1f23fc30b43f",
              "value": "Create clients account"
            },
            {
              "id": "6de6564f-4c67-4ce8-a24e-3a24fbf6312c",
              "value": "Manager create"
            },
            {
              "id": "0491d012-7951-4cf5-ab98-477fb42a1d38",
              "value": "Organizationals unit delete"
            },
            {
              "id": "48761b3e-eb99-477d-bcaa-47e66fe71705",
              "value": "Logout"
            },
            {
              "id": "de2dfaa7-d1fd-4306-95e8-4d4ee6371810",
              "value": "Users create"
            },
            {
              "id": "2846d9dd-3587-4069-804c-4fe7a5d17ada",
              "value": "Users delete"
            },
            {
              "id": "d68c38b9-7264-4e42-a1cd-51ab58917e21",
              "value": "Clients data review"
            },
            {
              "id": "b67c5b8a-9839-416c-9af1-55a26af3feff",
              "value": "Users review"
            },
            {
              "id": "4ec8c7c4-3e99-42b4-b949-6366b6cbc243",
              "value": "Create request"
            },
            {
              "id": "6f9d11e2-6e31-4635-9b07-6dd21d34acfa",
              "value": "Delete clients account"
            },
            {
              "id": "63106bb4-d0ba-4f57-afef-6f08bd1057d7",
              "value": "Assign employees to OU"
            },
            {
              "id": "a66cd733-cc85-4a9d-aa1e-71ced0142002",
              "value": "Change clients request status"
            },
            {
              "id": "f28b5260-ef69-4d4e-8ed1-7afd47a4aaec",
              "value": "Permissions review"
            },
            {
              "id": "478ddee7-f331-49a4-ad23-8be40c71fd55",
              "value": "OU review"
            },
            {
              "id": "ddc7b77a-de71-46c7-9551-8de58a5cb5d4",
              "value": "Roles delete"
            },
            {
              "id": "b36886e3-3461-4907-8f78-8e0fef570f70",
              "value": "Change users roles"
            },
            {
              "id": "d3a7f1bb-c016-4000-bc80-a83e57756b39",
              "value": "Roles review"
            },
            {
              "id": "6df0a789-82e0-4819-a0ae-b43ad447a799",
              "value": "Organizationals unit review"
            },
            {
              "id": "cd33e8bd-1005-4ab7-966f-bb3c2bd0ee69",
              "value": "Roles create"
            },
            {
              "id": "56b1d16b-e6cd-4dcc-b084-cc461117a97d",
              "value": "Permissions delete from roles"
            },
            {
              "id": "602f7d9f-a4b1-41ea-92b4-d4b110fba428",
              "value": "Own requests review"
            },
            {
              "id": "ddae3ea5-fcbd-4f8f-8084-d7b9445d9875",
              "value": "Create employees"
            },
            {
              "id": "7f23e4a3-55a7-44cd-b250-def17e2382af",
              "value": "Organizationals unit create"
            },
            {
              "id": "dc4a35ab-349a-404e-bb9f-e3b40155287b",
              "value": "Permissions assigning"
            },
            {
              "id": "7dd517a2-0c87-42f2-aa30-ec763c556522",
              "value": "Clients documents review"
            },
            {
              "id": "653722c9-d27d-42f3-8ebb-ee602970bc8b",
              "value": "Review OU employees"
            },
            {
              "id": "c2dec596-a9ca-49f3-9389-f82f4b8580d9",
              "value": "Clients requests review"
            }
          ]
        },
        {
          "id": "ffa4d9bb-af18-4ec2-9f9f-7b610bf4ae1c",
          "name": "Client",
          "permissions": []
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Mirza",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic2@etf.unsa.ba",
      "ssn": "000000000",
      "roles": []
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Mirza",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic2@etf.unsa.ba",
      "ssn": "000000000",
      "roles": []
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Mirza",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic2@etf.unsa.ba",
      "ssn": "000000000",
      "roles": [
        {
          "id": "ffa4d9bb-af18-4ec2-9f9f-7b610bf4ae1c",
          "name": "Client",
          "permissions": []
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Mirza",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic13@etf.unsa.ba",
      "ssn": "000000000",
      "roles": [
        {
          "id": "ffa4d9bb-af18-4ec2-9f9f-7b610bf4ae1c",
          "name": "Client",
          "permissions": []
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "MirzaRadnik",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic13@etf.unsa.ba",
      "ssn": "000000000",
      "roles": [
        {
          "id": "333345b5-c9a0-4db0-9dd1-c6c0bd22a200",
          "name": "Employee",
          "permissions": []
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "MirzaRadnik222",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic13@etf.unsa.ba",
      "ssn": "000000000",
      "roles": [
        {
          "id": "333345b5-c9a0-4db0-9dd1-c6c0bd22a200",
          "name": "Employee",
          "permissions": []
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Mirza",
      "username": "Mirza",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "msinanovic13@etf.unsa.ba",
      "ssn": "000000000",
      "roles": [
        {
          "id": "ffa4d9bb-af18-4ec2-9f9f-7b610bf4ae1c",
          "name": "Client",
          "permissions": []
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Maida Karamujic",
      "username": "Maida",
      "dateOfBirth": "2021-12-14T00:00:00",
      "state": "Bih",
      "city": "Sarajevo",
      "address": "ZoB bb",
      "phone": "033333333",
      "email": "mkaramujic1@etf.unsa.ba",
      "ssn": "000000000",
      "roles": [
        {
          "id": "afbce795-7953-458c-916e-08d9b4dc3c4a",
          "name": "Admin",
          "permissions": [
            {
              "id": "9f97d183-bc65-4e5f-a3e7-0c2013fa63a7",
              "value": "Delete employees"
            },
            {
              "id": "36ad537e-db41-4354-9574-0fcd59f444c1",
              "value": "Own documents review"
            },
            {
              "id": "689aba58-c97a-4ed5-a6b2-1f23fc30b43f",
              "value": "Create clients account"
            },
            {
              "id": "6de6564f-4c67-4ce8-a24e-3a24fbf6312c",
              "value": "Manager create"
            },
            {
              "id": "0491d012-7951-4cf5-ab98-477fb42a1d38",
              "value": "Organizationals unit delete"
            },
            {
              "id": "48761b3e-eb99-477d-bcaa-47e66fe71705",
              "value": "Logout"
            },
            {
              "id": "de2dfaa7-d1fd-4306-95e8-4d4ee6371810",
              "value": "Users create"
            },
            {
              "id": "2846d9dd-3587-4069-804c-4fe7a5d17ada",
              "value": "Users delete"
            },
            {
              "id": "d68c38b9-7264-4e42-a1cd-51ab58917e21",
              "value": "Clients data review"
            },
            {
              "id": "b67c5b8a-9839-416c-9af1-55a26af3feff",
              "value": "Users review"
            },
            {
              "id": "4ec8c7c4-3e99-42b4-b949-6366b6cbc243",
              "value": "Create request"
            },
            {
              "id": "6f9d11e2-6e31-4635-9b07-6dd21d34acfa",
              "value": "Delete clients account"
            },
            {
              "id": "63106bb4-d0ba-4f57-afef-6f08bd1057d7",
              "value": "Assign employees to OU"
            },
            {
              "id": "a66cd733-cc85-4a9d-aa1e-71ced0142002",
              "value": "Change clients request status"
            },
            {
              "id": "f28b5260-ef69-4d4e-8ed1-7afd47a4aaec",
              "value": "Permissions review"
            },
            {
              "id": "478ddee7-f331-49a4-ad23-8be40c71fd55",
              "value": "OU review"
            },
            {
              "id": "ddc7b77a-de71-46c7-9551-8de58a5cb5d4",
              "value": "Roles delete"
            },
            {
              "id": "b36886e3-3461-4907-8f78-8e0fef570f70",
              "value": "Change users roles"
            },
            {
              "id": "d3a7f1bb-c016-4000-bc80-a83e57756b39",
              "value": "Roles review"
            },
            {
              "id": "6df0a789-82e0-4819-a0ae-b43ad447a799",
              "value": "Organizationals unit review"
            },
            {
              "id": "cd33e8bd-1005-4ab7-966f-bb3c2bd0ee69",
              "value": "Roles create"
            },
            {
              "id": "56b1d16b-e6cd-4dcc-b084-cc461117a97d",
              "value": "Permissions delete from roles"
            },
            {
              "id": "602f7d9f-a4b1-41ea-92b4-d4b110fba428",
              "value": "Own requests review"
            },
            {
              "id": "ddae3ea5-fcbd-4f8f-8084-d7b9445d9875",
              "value": "Create employees"
            },
            {
              "id": "7f23e4a3-55a7-44cd-b250-def17e2382af",
              "value": "Organizationals unit create"
            },
            {
              "id": "dc4a35ab-349a-404e-bb9f-e3b40155287b",
              "value": "Permissions assigning"
            },
            {
              "id": "7dd517a2-0c87-42f2-aa30-ec763c556522",
              "value": "Clients documents review"
            },
            {
              "id": "653722c9-d27d-42f3-8ebb-ee602970bc8b",
              "value": "Review OU employees"
            },
            {
              "id": "c2dec596-a9ca-49f3-9389-f82f4b8580d9",
              "value": "Clients requests review"
            }
          ]
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Adem Cogic",
      "username": "acogic",
      "dateOfBirth": "2021-03-03T00:00:00",
      "state": "Bosna i Hercegovina",
      "city": "Travnik",
      "address": "ul.neka bb",
      "phone": "062/105-111",
      "email": "acogic1@etf.unsa.ba",
      "ssn": "",
      "roles": [
        {
          "id": "afbce795-7953-458c-916e-08d9b4dc3c4a",
          "name": "Admin",
          "permissions": [
            {
              "id": "9f97d183-bc65-4e5f-a3e7-0c2013fa63a7",
              "value": "Delete employees"
            },
            {
              "id": "36ad537e-db41-4354-9574-0fcd59f444c1",
              "value": "Own documents review"
            },
            {
              "id": "689aba58-c97a-4ed5-a6b2-1f23fc30b43f",
              "value": "Create clients account"
            },
            {
              "id": "6de6564f-4c67-4ce8-a24e-3a24fbf6312c",
              "value": "Manager create"
            },
            {
              "id": "0491d012-7951-4cf5-ab98-477fb42a1d38",
              "value": "Organizationals unit delete"
            },
            {
              "id": "48761b3e-eb99-477d-bcaa-47e66fe71705",
              "value": "Logout"
            },
            {
              "id": "de2dfaa7-d1fd-4306-95e8-4d4ee6371810",
              "value": "Users create"
            },
            {
              "id": "2846d9dd-3587-4069-804c-4fe7a5d17ada",
              "value": "Users delete"
            },
            {
              "id": "d68c38b9-7264-4e42-a1cd-51ab58917e21",
              "value": "Clients data review"
            },
            {
              "id": "b67c5b8a-9839-416c-9af1-55a26af3feff",
              "value": "Users review"
            },
            {
              "id": "4ec8c7c4-3e99-42b4-b949-6366b6cbc243",
              "value": "Create request"
            },
            {
              "id": "6f9d11e2-6e31-4635-9b07-6dd21d34acfa",
              "value": "Delete clients account"
            },
            {
              "id": "63106bb4-d0ba-4f57-afef-6f08bd1057d7",
              "value": "Assign employees to OU"
            },
            {
              "id": "a66cd733-cc85-4a9d-aa1e-71ced0142002",
              "value": "Change clients request status"
            },
            {
              "id": "f28b5260-ef69-4d4e-8ed1-7afd47a4aaec",
              "value": "Permissions review"
            },
            {
              "id": "478ddee7-f331-49a4-ad23-8be40c71fd55",
              "value": "OU review"
            },
            {
              "id": "ddc7b77a-de71-46c7-9551-8de58a5cb5d4",
              "value": "Roles delete"
            },
            {
              "id": "b36886e3-3461-4907-8f78-8e0fef570f70",
              "value": "Change users roles"
            },
            {
              "id": "d3a7f1bb-c016-4000-bc80-a83e57756b39",
              "value": "Roles review"
            },
            {
              "id": "6df0a789-82e0-4819-a0ae-b43ad447a799",
              "value": "Organizationals unit review"
            },
            {
              "id": "cd33e8bd-1005-4ab7-966f-bb3c2bd0ee69",
              "value": "Roles create"
            },
            {
              "id": "56b1d16b-e6cd-4dcc-b084-cc461117a97d",
              "value": "Permissions delete from roles"
            },
            {
              "id": "602f7d9f-a4b1-41ea-92b4-d4b110fba428",
              "value": "Own requests review"
            },
            {
              "id": "ddae3ea5-fcbd-4f8f-8084-d7b9445d9875",
              "value": "Create employees"
            },
            {
              "id": "7f23e4a3-55a7-44cd-b250-def17e2382af",
              "value": "Organizationals unit create"
            },
            {
              "id": "dc4a35ab-349a-404e-bb9f-e3b40155287b",
              "value": "Permissions assigning"
            },
            {
              "id": "7dd517a2-0c87-42f2-aa30-ec763c556522",
              "value": "Clients documents review"
            },
            {
              "id": "653722c9-d27d-42f3-8ebb-ee602970bc8b",
              "value": "Review OU employees"
            },
            {
              "id": "c2dec596-a9ca-49f3-9389-f82f4b8580d9",
              "value": "Clients requests review"
            }
          ]
        }
      ]
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Elon Musk",
      "username": "emusk",
      "dateOfBirth": "1985-04-03T00:00:00",
      "state": "Bosna i Hercegovina",
      "city": "Tuzla",
      "address": "ul.Nova Ulica bb",
      "phone": "061/222-111",
      "email": "emusk@etf.unsa.ba",
      "ssn": "",
      "roles": []
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Mirza Sinanovic",
      "username": "msinanovic",
      "dateOfBirth": "1985-03-03T00:00:00",
      "state": "Bosna i Hercegovina",
      "city": "Mostar",
      "address": "ul.Nova Ulica bb",
      "phone": "062/222-111",
      "email": "msinanovic1@etf.unsa.ba",
      "ssn": "",
      "roles": []
    },
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Džejlan Šabic",
      "username": "dsabic",
      "dateOfBirth": "1996-09-13T00:00:00",
      "state": "Bosna i Hercegovina",
      "city": "Bosanska Krupa",
      "address": "ul.Caršija bb",
      "phone": "062/297-000",
      "email": "dsabic1@etf.unsa.ba",
      "ssn": "",
      "roles": []
    }
  ]*/
  
  @Output() roles: Rol[]=[];
  //roles: Rol[] =[];

  constructor(private UserService:UserService) { 
    UserService.getAllPermissions().subscribe(response=>this.UserService.setPers(response.data));
    UserService.getAllPermissions().subscribe(response=>{this.UserService.setPers(response.data);
    });
    UserService.getAllRoles().subscribe(response=>{this.UserService.setRoles(response.data);
    });
    UserService.getAllUsers().subscribe(response=>{this.UserService.setUsers(response.data);
    this.users=this.UserService.getUsers();
    });
    
    
  }

  ngOnInit(): void {
  }

}
