import { Component, OnInit } from '@angular/core';
import { User, UserFormFields } from '../../models/user.model';
import { FormField, Validation, ValidationResult } from '../../models/common.model';
import { Router } from '@angular/router';
import { BranchService } from '../../services/branch.service';
import { validateUser } from '../../utilities/mappers';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-manager.component.html',
  styleUrls: ['./new-manager.component.css']
})
export class NewManagerComponent implements OnInit {

  fields: FormField[] = UserFormFields;
  user: any = {} as User;
  validationResults: ValidationResult[] = [];

  constructor(private router: Router, private branchService: BranchService, private userService: UserService) {
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
  }

  onClose = () => {
    this.router.navigateByUrl('/managers');
  };

  onUserChange(newValue: any) {
    this.user = {
      ...this.user,
      ...newValue
    }
  }

  onSave = () => {
    this.validationResults = validateUser(this.user);
    console.log("validation", this.validationResults);
    console.log("data", this.user);
    const invalid = this.validationResults.find(vr => vr.validation === Validation.INVALID);
    if (invalid === undefined) {
      this.userService.createNewManager(this.user)
        .subscribe((response) => {
          if (!response.data || response.error)
            alert("Action failed")
          this.onClose()
        });
    }
  };

}
