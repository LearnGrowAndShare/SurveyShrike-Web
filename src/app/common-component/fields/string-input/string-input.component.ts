import { Component, OnInit, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.scss'], 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StringInputComponent),
      multi: true
    }
  ]
})
export class StringInputComponent implements ControlValueAccessor  {
  disabled = false;
  fieldValue = "";
  onChange = (value: string) => {};
  onTouched= (value: string) => {};
  @Output() onSelectionChange:EventEmitter<any> = new EventEmitter<any>();
  
  writeValue(obj: any): void {
    this.fieldValue = obj;
    this.onChange(this.fieldValue);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
   this.disabled = isDisabled;
  }
  
  @Input() multiline = false;

  constructor() { }

  valueChange(value) {
    this.fieldValue = value;
    this.onSelectionChange.emit(value);
  }
}
