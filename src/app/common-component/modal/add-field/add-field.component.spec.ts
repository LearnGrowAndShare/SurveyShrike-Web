import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldComponent } from './add-field.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AddFieldComponent', () => {
  let component: AddFieldComponent;
  let fixture: ComponentFixture<AddFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldComponent ], 
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
