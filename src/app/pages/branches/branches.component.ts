import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Branch} from '../../models/branch.model';
import {BranchService} from '../../services/branch.service';
import {Action} from '../../models/common.model';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  branches: Branch[] = [];
  filteredBranches: Branch[] = [];
  searchKeyword: string = '';
  displayedColumns: string[] = ['id', 'address', 'city'];
  actionColumns: Action[] = [Action.DELETE];
  baseLink: string = 'branches';

  constructor(private branchService: BranchService, private router: Router) {
    this.branches = branchService.getBranches();
  }

  ngOnInit(): void {
    this.filteredBranches = this.branches;
  }

  btnClick(route: string): void {
    this.router.navigateByUrl(route);
  };

  search(event: any) {
    this.searchKeyword = event.target.value;
    this.filteredBranches = [...this.branches].filter(branch => this.isKeywordInClientData(branch, this.searchKeyword));
  }

  isKeywordInClientData(branch: Branch, keyword: string) {
    return branch.city.includes(keyword) ||
      branch.address.includes(keyword) ||
      branch.id.includes(keyword);
  }

  delete(id: string) {
    this.branchService.deleteBranch(id);
  }
}
