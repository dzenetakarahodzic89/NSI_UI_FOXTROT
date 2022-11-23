import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {Action} from '../../models/common.model';

@Component({
  selector: 'app-clients',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  managers: User[] = [];
  filteredClients: User[] = [];
  searchKeyword: string = '';
  actionColumns: Action[] = [Action.EDIT, Action.VIEW];
  displayedColumns: string[] = ['name', 'email', 'phone', 'username', 'ssn', 'address', 'city'];
  baseLink: string = 'managers';

  constructor(private clientService: UserService, private router: Router) {
    clientService.getAllUsersByRole('Manager')
      .subscribe(response => this.managers = response.data);
  }

  ngOnInit(): void {
    this.filteredClients = this.managers;
  }

  btnClick(route: string) {
    console.log("jes")
    this.router.navigateByUrl(route);
  };

  search(event: any) {
    this.searchKeyword = event.target.value;
    this.filteredClients = [...this.managers].filter(client => this.isKeywordInClientData(client, this.searchKeyword));
    console.log('filtered', this.filteredClients);
  }

  isKeywordInClientData(clientData: User, keyword: string) {
    return clientData.city.includes(keyword) ||
      clientData.ssn.includes(keyword) ||
      clientData.name.includes(keyword) ||
      clientData.dateOfBirth.includes(keyword) ||
      clientData.address.includes(keyword) ||
      clientData.email.includes(keyword) ||
      clientData.phone.includes(keyword) ||
      clientData.state.includes(keyword);
  }

}
