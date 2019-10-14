import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-field-lists',
  templateUrl: './field-lists.component.html',
  styleUrls: ['./field-lists.component.scss']
})
export class FieldListsComponent implements OnInit {
  formFields = {};
  
  @Input() fieldConfigs;
  @Input() showSave = false;
  @Output() onSaveEvent = new EventEmitter();
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  changeInputEvent(value, id) {
    this.formFields[id] = value;
  }
  changeMultiValueEvent(value, id) {
    this.formFields[id] = value ? value.join(",") : "";
  }
  
  changeBoolean(value, id) {
    this.formFields[id] = value ? value.join(",") : "";
  }

  async changeFile(value, id) {
    const data  = await this.toBase64(value);
    this.formFields[id] = data;
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


  save() {
    if (Object.keys(this.formFields).length < this.fieldConfigs.length) {
      this.modalService.showModal("error", "All fields are required.");
    } else {
      this.onSaveEvent.emit(this.formFields);
    }
    
  }
}
