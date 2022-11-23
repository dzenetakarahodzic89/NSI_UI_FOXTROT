import { Component, OnInit } from '@angular/core';
import { User, UserFormFields } from '../../models/user.model';
import { FormField, Validation, ValidationResult } from '../../models/common.model';
import { BranchService } from '../../services/branch.service';
import { Router } from '@angular/router';
import { validateUser } from '../../utilities/mappers';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  fields: FormField[] = UserFormFields;
  user: any = {} as User;
  validationResults: ValidationResult[] = [];

  constructor(private branchService: BranchService, private userService: UserService, private router: Router) {
    this.fields = [
      ...this.fields,
      {
        inputType: 'select',
        key: 'branchId',
        label: 'Branch',
        optionKey: 'address',
        options: branchService.getBranches()
      }
    ]
  }

  ngOnInit(): void { }

  onClose = () => {
    this.router.navigateByUrl('/clients');
  };

  onUserChange(newValue: any) {
    this.user = {
      ...this.user,
      ...newValue
    }
    console.log("user", this.user)
    console.log("NewValue", newValue)

  }

  onSave = () => {
    this.validationResults = validateUser(this.user);
    console.log("validation", this.validationResults);
    console.log("data", this.user);
    const invalid = this.validationResults.find(vr => vr.validation === Validation.INVALID);
    if (invalid === undefined) {
      this.userService.createNewClient(this.user)
        .subscribe((response) => {
          if (!response.data || response.error)
            alert("Action failed")
          this.onClose()
        });
    }
  };

}
