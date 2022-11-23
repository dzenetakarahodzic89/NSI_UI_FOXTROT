import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
// import { Action } from '../../models/common.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {

  constructor(private requestService: RequestService, private router: Router) { }

  allColumns = ['date', 'Status', 'Type', 'View', 'Edit', 'Delete'];
  displayedColumns = ['date', 'Status', 'Type'];
  // actionColumns = [Action.VIEW, Action.EDIT,];
  dataSource = [];

  ngOnInit(): void {
    this.requestService.getAllRequests()
      .subscribe(response => {
        this.dataSource = response.data;
        this.dataSource = this.dataSource.map(res => {
          // console.log("Res", res)
          return {
            ...res,
            Status: res.requestStatus.name,
            Type: res.requestType.name
          }
        })
      });
  }

  view(id) {
    this.router.navigateByUrl(`request/${id}`);
  }

  approve(id) {
    this.requestService.approveRequest(id).subscribe(response => {
      this.dataSource.find(request => request.id === response.data.id).Status = response.data.requestStatus.name;
    });
  }

  decline(id) {
    this.requestService.declineRequest(id).subscribe(response => {
      this.dataSource.find(request => request.id === response.data.id).Status = response.data.requestStatus.name;
    });
  }
}
