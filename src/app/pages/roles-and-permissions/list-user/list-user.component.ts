import { Component, OnInit, Input } from '@angular/core';
import {Usr, Rol} from '../../../models/userlist.model';
//import {Rol} from '../../../models/userlist.model';
import {UserService} from '../../../services/user.service';
import { Subscription } from 'rxjs';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
@Input()user:Usr;
@Input()role;

  permisije:any[]=[]/*[
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
          ]*/

  pravePermisije:{
    "id":string,
    "value":string,
    "check":boolean
  }[]=[];

  novaRola:{
    "name":string,
    "permissions":any[]
  };

  prikaziRolu:boolean=false;
  prikaziPermisiju:boolean=false;
  prikaziDodajPermisiju:boolean=false;
  prikaziDodajPostojecuRolu:boolean=false;
  permisijeOdabraneRole:any[]=[];

  listaRola: Rol[] = [];
  subsRola: Subscription;
  

  postojecaRola:any;

  rolaName = "";

  clickRola:any;


  constructor(private UserService:UserService) { 
    //UserService.getAllRoles().subscribe(response=>this.role=response.data)
    
    
  }

  ngOnInit(): void {
    this.subsRola= this.UserService.rolesChanged.subscribe(
      (rols: Rol[]) => {
        this.listaRola = rols;
      }
    );
    this.listaRola=this.UserService.getRoles();
    this.permisije=this.UserService.getPers();
    this.initPermisija();
  }

  initPermisija(){
    this.pravePermisije=[];
    for(let i of this.permisije){
      const p ={
        id:i.id,
        value:i.value,
        check:false
      }
      this.pravePermisije.push(p);
    }
  }

  dajusera(){
    if(this.prikaziRolu==true){
    this.prikaziRolu=false;
    this.prikaziPermisiju=false;
    this.prikaziDodajPermisiju=false;
    this.initPermisija();
    }  
    else
      this.prikaziRolu=true;
  }

  deleteRole(role,user){
    let u=this.UserService.getUsers().find(x => x.id==user);
    let r=u.roles;
    const index = r.indexOf(role, 0);
    r.splice(index, 1);
    let newr:Guid[]=[];
    for(let rola of r){
      newr.push(rola.id);
    }

    this.UserService.setExistRole(u.id,{"roles":newr});
  }

  dajPermisije(per){
    this.clickRola=per;
    per=per.permissions;
    
    for(let i of per){
      let objIndex=this.pravePermisije.findIndex((obj => obj.value==i.value));
      this.pravePermisije[objIndex].check=true;
    }
    if(this.prikaziPermisiju==true){
      this.prikaziPermisiju=false;
      this.prikaziDodajPermisiju=false;
      this.initPermisija();
    }
    else
      this.prikaziPermisiju=true;
  }

  onSave(pravePermisije){
    let p=[];
    for(let i of pravePermisije){
      if(i.check){
        let objIndex=this.permisije.findIndex((obj => obj.value==i.value));
        p.push(this.permisije[objIndex]);
      }
    }

    let newp:any[]=[];
    for(let per of p){
      newp.push(per.id);
    }
    if(this.prikaziDodajPermisiju && this.rolaName!=""){
      const nw={
        name:this.rolaName,
        permissions:newp
      };
      this.UserService.setNewRole(nw);
    }
    else if(this.prikaziDodajPermisiju==false)
      this.UserService.setPermissionRole(this.clickRola.id,{"name":this.clickRola.name,"permissions":newp});
  }

  btnClick(){
    if(this.prikaziDodajPermisiju==false){
      this.prikaziDodajPermisiju=true;
      this.prikaziPermisiju=true;
    }
    else{
      this.prikaziDodajPermisiju=false;
      this.prikaziPermisiju=false;
      this.prikaziDodajPostojecuRolu=false;
    }
  }

  btnClickExist(){
    if(this.prikaziDodajPostojecuRolu==false){
      this.prikaziDodajPostojecuRolu=true;
      this.prikaziPermisiju=true;
    }
    else{
      this.prikaziDodajPermisiju=false;
      this.prikaziPermisiju=false;
      this.prikaziDodajPostojecuRolu=false;
    }
  }

  onChangeRole(value: any){
    this.postojecaRola = this.listaRola.find(x => x.name == value);

}


onSaveRole(){
  let pr:any[]=[];
  const nw={
    name:this.rolaName,
    permissions:pr
  };
  this.UserService.setNewRole(nw);
}

onSaveExistRole(user: any){
  let u=this.UserService.getUsers().find(x => x.id==user);
  let r=u.roles;
  r.push(this.postojecaRola);
  let newr:Guid[]=[];
  for(let rola of r){
    newr.push(rola.id);
  }

  this.UserService.setExistRole(u.id,{"roles":newr});
}

}
