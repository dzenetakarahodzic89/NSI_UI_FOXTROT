import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/common.model';
import { MyRequestResponse, Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';
import { Action } from '../../models/common.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  myResponse: any[] = [];
  requests: Request[] = [];
  displayedColumns = ['date', 'Status', 'Type'];
  actionColumns = [Action.VIEW, Action.EDIT,]
  baseLink = 'request';
  requestTypes = [];

  constructor(private requestService: RequestService, private router: Router) {
    requestService.getAllUserRequests()
      .subscribe(response => {
        this.myResponse = response.data
        this.myResponse = this.myResponse.map(res => {
          console.log("Res", res)
          return {
            ...res,
            Status: res.requestStatus.name,
            Type: res.requestType.name
          }
        })
      });
    requestService.getRequestTypes()
      .subscribe(response => {
        this.requestTypes = response.data
        console.log("Types", this.requestTypes)
      })
  }

  createRequest = (requestTypeId) => {
    this.requestService.createRequest({ requestTypeId }).subscribe(response => this.myResponse = [...this.myResponse,
    {
      ...response.data,
      Status: response.data.requestStatus.name,
      Type: response.data.requestType.name
    }]
    )
  }

  ngOnInit(): void {

  }
}
