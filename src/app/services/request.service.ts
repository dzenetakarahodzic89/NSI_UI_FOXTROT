import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common.model';
import { MyRequestResponse } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<ApiResponse<MyRequestResponse[]>> {
    return this.http.get<ApiResponse<MyRequestResponse[]>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/Request', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  getAllUserRequests(): Observable<ApiResponse<MyRequestResponse[]>> {
    return this.http.get<ApiResponse<MyRequestResponse[]>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/Request/myRequests', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  getRequestTypes(): Observable<ApiResponse<MyRequestResponse[]>> {
    return this.http.get<ApiResponse<MyRequestResponse[]>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/RequestType/getAll');
  }

  createRequest(requestType): Observable<ApiResponse<MyRequestResponse>> {
    return this.http.post<ApiResponse<MyRequestResponse>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/Request', requestType);
  }

  approveRequest(requestId): Observable<ApiResponse<MyRequestResponse>> {
    return this.http.post<ApiResponse<MyRequestResponse>>(`https://nsi-dev-api-foxtrot.azurewebsites.net/api/Request/${requestId}/approve`, null);
  }

  declineRequest(requestId): Observable<ApiResponse<MyRequestResponse>> {
    return this.http.post<ApiResponse<MyRequestResponse>>(`https://nsi-dev-api-foxtrot.azurewebsites.net/api/Request/${requestId}/decline`, null);
  }

}
