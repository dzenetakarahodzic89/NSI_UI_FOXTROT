import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {Action} from '../../models/common.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: User[] = [];
  filteredClients: User[] = [];
  searchKeyword: string = '';
  actionColumns: Action[] = [Action.EDIT, Action.VIEW];
  displayedColumns = ['name', 'email', 'phone', 'username', 'ssn', 'address', 'city'];
  baseLink = 'clients';

  constructor(private clientService: UserService, private router: Router) {
    clientService.getAllUsersByRole('Client')
      .subscribe((response: any) => this.clients = response?.data);
  }

  ngOnInit(): void {
    this.filteredClients = this.clients;
  }

  btnClick(route: string): void {
    this.router.navigateByUrl(route);
  };

  search(event: any) {
    this.searchKeyword = event.target.value;
    this.filteredClients = [...this.clients].filter(client => this.isKeywordInClientData(client, this.searchKeyword));
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
