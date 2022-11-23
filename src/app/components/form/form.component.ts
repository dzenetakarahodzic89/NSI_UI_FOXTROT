import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormField, Validation, ValidationResult} from '../../models/common.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data?: any = undefined;
  @Input() fields: FormField[] = [];
  test?: string = '';
  @Input() showLabel?: boolean = false;
  @Input() readonly ?: boolean = false;
  @Input() validationResults: ValidationResult[] = [];

  @Output() dataChanged? = new EventEmitter<any>();
  @Output() newData?: any = undefined;

  isInvalid(key: string) {
    const validationResult = this.validationResults.find(vr => vr.key === key);
    return validationResult && validationResult.validation === Validation.INVALID;
  }

  getValidationMessage(key: string) {
    const validationResult = this.validationResults.find(vr => vr.key === key);
    return validationResult && validationResult.message;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event) {
    console.log("event", event);
    this.dataChanged.emit({ [event.target.name]: event.target.value });
  }
}
