import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private branchService: BranchService) { }

  inputValue = '';

  ngOnInit(): any {
    this.branchService.loadBranches()
  }

  onClick() {
    console.log("click");
  }

  onInputChange(event: any) {
    console.log("click");
  }
}
