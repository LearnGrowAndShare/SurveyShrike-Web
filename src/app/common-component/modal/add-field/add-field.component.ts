import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FieldValues } from 'src/app/models/field-response';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldType } from 'src/app/models/field-type';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss']
})
export class AddFieldComponent extends SimpleModalComponent<FieldValues, FieldValues> implements FieldValues, OnInit {
  title: string;  
  configuration: string;
  fieldType: string;
  items = [];
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })

  formTypes = [{label: 'Single Line input', type: FieldType.Input, multiline: false}, 
              {label: 'Multi Line input', type: FieldType.Multiline, multiline: true},
              {label: 'Dropdown', type: FieldType.Dropdown, inputType:'dropdown', items: []},
              {label: 'Select', type:  FieldType.Select, inputRype:'checkbox', items: []},
              {label: 'Radio', type:  FieldType.Radio, items: []}, 
              {label: 'File', type:  FieldType.File_Upload, items: []}
              ]
  fieldForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
    this.fieldForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      fieldType: new FormControl(null, Validators.required),
      formConfig: new FormControl(null),
    }); 
  }

  onFormSubmit() {
    if (this.fieldForm.valid) {
      this.result = this.fieldForm.getRawValue();
      this.result.fieldType = this.result.fieldType.trim();
      this.close();
    } else {
      this.Toast.fire({
        type: "error",
        title: "all fields are required."
      })
    }

  }

  setValue(value, type) {
    var typeToSet = this.formTypes.find(x => x.type === type);
    if (typeToSet && value) {
      this.items = value.split(',').map(x =>  x.trim());

      if (this.items) {
        this.fieldForm.patchValue({formConfig: this.items.join(",")});
      }
    }
  }

  get selectedFieldType() { return this.fieldForm.get('fieldType');}
}
