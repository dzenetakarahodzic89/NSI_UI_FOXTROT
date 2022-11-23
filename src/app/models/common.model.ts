export interface ApiResponse<T> {
  data: T;
  error: any;
  success: boolean;
}

export interface FormField {
  inputType: string;
  key: string;
  label: string;
  options?: any[];
  optionKey?: string;
}

export enum Action {
  EDIT,
  DELETE,
  VIEW
}

export enum Validation {
  VALID,
  INVALID
}

export interface ValidationResult {
  key: string;
  validation: Validation;
  message?: string;
}
