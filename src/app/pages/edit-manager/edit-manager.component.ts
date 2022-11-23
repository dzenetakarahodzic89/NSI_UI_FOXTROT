import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User, UserFormFields} from '../../models/user.model';
import {FormField} from '../../models/common.model';
import {Branch} from '../../models/branch.model';
import {BranchService} from '../../services/branch.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {

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

  onSave = () => {
    console.log('on save click');
  };


}
