import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormField, Validation, ValidationResult } from '../../models/common.model';
import { BranchFormFields, UserFormFields } from '../../models/user.model';
import { Branch } from '../../models/branch.model';
import { validateBranch, validateUser } from '../../utilities/mappers';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-new-branch',
  templateUrl: './new-branch.component.html',
  styleUrls: ['./new-branch.component.css']
})
export class NewBranchComponent implements OnInit {
  fields: FormField[] = BranchFormFields;
  branch: Branch = {} as Branch;
  validationResults: ValidationResult[] = [];

  constructor(private router: Router, private branchService: BranchService) { }

  ngOnInit(): void {
  }

  onClose = () => {
    this.router.navigateByUrl('/branches');
  };

  onBranchChange(newValue: any) {
    this.branch = {
      ...this.branch,
      ...newValue
    }
  }

  onSave = () => {
    this.validationResults = validateBranch(this.branch);
    const invalid = this.validationResults.find(vr => vr.validation === Validation.INVALID);
    if (invalid === undefined) {
      this.branchService.createNewBranch(this.branch)
        .subscribe((response) => {
          if (response.data) {
            this.branchService.addNewBranch(response.data)
            this.router.navigateByUrl('/branches');
          } else {
            alert("Action Failed")
            this.router.navigateByUrl('/branches');
          }

        }
        );
    }
  };

}
