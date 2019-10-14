import { Component, OnInit, Input, forwardRef, EventEmitter, Output} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-multi-value',
  templateUrl: './multi-value.component.html',
  styleUrls: ['./multi-value.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiValueComponent),
      multi: true
    }
  ]
})
export class MultiValueComponent implements OnInit, ControlValueAccessor{
  selectedValue = [];
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

  @Input() inputType = "dropdown";
  @Input() items =  [];
  constructor() { }

  ngOnInit() {
    
  }


  changeSelectStatus(isSelected, item, multiple) {
    if (!multiple) {
      this.selectedValue = [];
      this.selectedValue.push(...this.items.find((x: any) => x.label === item.label));
    } else {
      if (isSelected) {
        this.selectedValue.push(...this.items.find((x: any) => x.label === item.label));
      } else {
        this.selectedValue = this.items.filter((x: any) => x.label === item.label) || [];
      }
      
      
    }

    this.onChange(this.selectedValue);
    this.onSelectionChange.emit(this.selectedValue);
  }

}
