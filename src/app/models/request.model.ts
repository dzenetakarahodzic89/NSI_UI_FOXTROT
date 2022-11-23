import { User } from "./user.model";

export interface Request {
    id: string;
    date: string;
    Status: string;
    Type: string;
    
  }

  export interface MyRequestResponse {
    id: string;
    date: string;
    userId: string;
    user: User;
    employee: Employee;
    requestStatus: RequestStatus;
    document: Document;
    requestType: RequestType;
  }

  export interface Employee {
    id: string;
    name: string;
  }

  export interface RequestStatus {
    id: string;
    name: string;
  }

  export interface RequestType {
    id: string;
    name: string;
    description: string;
  }

  export interface Document {
    id: string;
    url: string;
    isIssued: string;
    requestId: string;
    documentTypeId: string;
    documentType: DocumentType;
    blockchainId: string;
  }