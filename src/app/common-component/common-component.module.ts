
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldListsComponent } from './field-lists/field-lists.component';
import { BooleanValueComponent } from './fields/boolean-value/boolean-value.component';
import { MultiValueComponent } from './fields/multi-value/multi-value.component';
import { FileComponent } from './fields/file/file.component';
import { StringInputComponent } from './fields/string-input/string-input.component';
import { AddFieldComponent } from './modal/add-field/add-field.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalService } from './modal/modal.service';

@NgModule({
  declarations: [
  FieldListsComponent,
  BooleanValueComponent,
  MultiValueComponent,
  FileComponent,
  StringInputComponent,
  AddFieldComponent,
  ],
  imports: [
    CommonModule,
    SimpleModalModule.forRoot({container:document.body}), 
    ReactiveFormsModule
  ],
  providers: [ModalService],
  entryComponents: [
    FieldListsComponent,
    BooleanValueComponent,
    MultiValueComponent,
    FileComponent,
    StringInputComponent, AddFieldComponent, FieldListsComponent
  ],
  exports: [    FieldListsComponent,
    BooleanValueComponent,
    MultiValueComponent,
    FileComponent,
    StringInputComponent]
})
export class CommonComponentModule { }
