import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common.model';
import { DocumentType } from '../models/documentType.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentType: DocumentType[];
  constructor(private http: HttpClient) { }

  getAllDocumentType() {
    return this.http.get<ApiResponse<DocumentType[]>>('https://nsi-dev-api-foxtrot.azurewebsites.net/api/DocumentType/getAll')
  }

  getDocument(requestId) {
    return this.http.get(`https://nsi-dev-api-foxtrot.azurewebsites.net/api/Request/${requestId}`);
  }

  addDocument(requestId, data) {
    return this.http.post(`https://nsi-dev-api-foxtrot.azurewebsites.net/api/Request/${requestId}/newDocument`, data);
  }

}
