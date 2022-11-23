import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  class?: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'dashboard'},
  {path: '/profile', title: 'My Profile', icon: 'new_label'},
  {path: '/clients', title: 'Clients', icon: 'people_alt'},
  {path: '/branches', title: 'Branches', icon: 'location_on'},
  {path: '/employees', title: 'Employees', icon: 'apartment'},
  {path: '/managers', title: 'Managers', icon: 'apartment'},
  {path: '/requests', title: 'My requests', icon: 'insert_drive_file'},
  {path: '/clientrequests', title: 'Requests', icon: 'insert_drive_file'},
  {path: '/roles-and-permissions', title: 'Roles & Permissions', icon: 'insert_drive_file'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.menuItems = ROUTES;
  }
}
