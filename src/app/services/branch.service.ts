import { Injectable } from '@angular/core';
import { Branch } from '../models/branch.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  branches: Branch[];

  constructor(private http: HttpClient) { }

  options: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  }

  loadBranches() {
    this.http.get<ApiResponse<Branch[]>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/Branch/getAll')
      .subscribe(response => this.branches = response?.data);
  }

  getBranches(): Branch[] {
    return this.branches;
  }

  deleteBranch(id: string) {
    return this.http.delete(`https://nsi-dev-api-foxtrot.azurewebsites.net/api/Branch?id=${id}`)
      .subscribe(() => this.branches = this.branches.filter(b => b.id !== id));
  }

  createNewBranch(branch: Branch) {
    return this.http.post<ApiResponse<Branch>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/Branch', branch);
  }
  addNewBranch(branch) {
    this.branches = [...this.branches, branch];

  }
}
