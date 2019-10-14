import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'], 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileComponent),
      multi: true
    }
  ]
})
export class FileComponent  implements ControlValueAccessor  {
  disabled = false;
  fieldValue = "";
  onChange = (value: File) => {};
  onTouched= (value: string) => {};
  

  writeValue(obj: any): void {
   this.fieldValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  this.disabled = this.disabled;
  }
  
  fileToUpload: File = null;


  fileChange(file) {
    this.fileToUpload = file;
    this.onChange(this.fileToUpload)
  }
}
