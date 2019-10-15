import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldListsComponent } from './field-lists.component';
import { BooleanValueComponent } from '../fields/boolean-value/boolean-value.component';
import { MultiValueComponent } from '../fields/multi-value/multi-value.component';
import { FileComponent } from '../fields/file/file.component';
import { StringInputComponent } from '../fields/string-input/string-input.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FieldListsComponent', () => {
  let component: FieldListsComponent;
  let fixture: ComponentFixture<FieldListsComponent>;
  const ModalServiceSpy = {
    showModal: jasmine.createSpy('showModal')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldListsComponent
      ],
        imports: [FormsModule, ReactiveFormsModule],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        providers: [{provide: ModalService, useValue: ModalServiceSpy}]
          })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
