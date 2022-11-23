import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User, UserFormFields} from '../../models/user.model';
import {FormField} from '../../models/common.model';
import {Router} from '@angular/router';
import {BranchService} from '../../services/branch.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User = {} as User;
  fields: FormField[] = UserFormFields;

  constructor(private userService: UserService, private router: Router, private branchService: BranchService) {
    this.fields = [
      ...this.fields,
      {
        inputType: 'select',
        key: 'branchId',
        label: 'Branch',
        optionKey: 'address',
        options: branchService.getBranches()
      }
    ];
  }

  ngOnInit(): void {
    this.userService.getCurrentUser()
      .subscribe(response => this.currentUser = response.data);
  }

  onClose = () => {
    this.router.navigateByUrl('/clients');
  };

}
