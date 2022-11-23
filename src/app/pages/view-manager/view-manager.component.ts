import {Component, OnInit} from '@angular/core';
import {User, UserFormFields} from '../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormField} from '../../models/common.model';
import {BranchService} from '../../services/branch.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.css']
})
export class ViewManagerComponent implements OnInit {

  employeeData: User = {} as User;
  fields: FormField[] = UserFormFields;

  constructor(
    private route: ActivatedRoute,
    private clientService: UserService,
    private branchService: BranchService,
    private router: Router) {

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
    const userId = this.route.snapshot.pathFromRoot[1].params['id'];
    this.clientService.getUser(userId)
      .subscribe(response => this.employeeData = response.data);
  }

  onClose = () => {
    this.router.navigateByUrl('/employees');
  };


}
