import {UserFormKeys} from '../models/user.model';
import {Validation, ValidationResult} from '../models/common.model';
import {Branch} from '../models/branch.model';

export const validateUser = (user: any): ValidationResult[] => {
  const validationResults: ValidationResult[] = [];

  Object.keys(UserFormKeys).forEach((key: string) => {
    if (!user[key]) {
      const validationResult: ValidationResult = {} as ValidationResult;
      validationResult.validation = Validation.INVALID;
      validationResult.key = key;
      validationResult.message = UserFormKeys[key] + " cannot be empty.";
      validationResults.push(validationResult);
    }
  });

  return validationResults;
}

export const validateBranch = (branch: Branch): ValidationResult[] => {
  const validationResults: ValidationResult[] = [];

  if (!branch.city) {
    const validationResult: ValidationResult = {} as ValidationResult;
    validationResult.validation = Validation.INVALID;
    validationResult.key = 'city';
    validationResult.message = 'City cannot be empty.';
    validationResults.push(validationResult);
  }
  if (branch.address === undefined) {
    const validationResult: ValidationResult = {} as ValidationResult;
    validationResult.validation = Validation.INVALID;
    validationResult.key = 'city';
    validationResult.message = 'City cannot be empty.';
    validationResults.push(validationResult);
  }

  return validationResults;
}
