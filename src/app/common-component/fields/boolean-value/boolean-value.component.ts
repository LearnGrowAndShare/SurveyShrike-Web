import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-boolean-value',
  templateUrl: './boolean-value.component.html',
  styleUrls: ['./boolean-value.component.scss'], 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BooleanValueComponent),
      multi: true
    }
  ]
})
export class BooleanValueComponent implements OnInit, ControlValueAccessor {
  selectedValue;
  disabled = false;
  @Output() onSelectionChange:EventEmitter<any> = new EventEmitter<any>();
  onChange = (value: any[]) => {};
  onTouched= (value: string) => {};

  writeValue(obj: any): void {
     this.selectedValue = obj;
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


  @Input() items =  [];
  constructor() { }

  ngOnInit() {
    this.items = this.items || [];
  }


  changeSelectStatus(item) {

   this.items.forEach((x: any) => x.selected = x.label === item.label);
   this.onChange(this.items.filter((x: any)  => x.selected));
   this.onSelectionChange.emit(this.items.filter((x: any)  => x.selected));

  }

}
