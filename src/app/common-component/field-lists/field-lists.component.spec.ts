import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldListsComponent } from './field-lists.component';

describe('FieldListsComponent', () => {
  let component: FieldListsComponent;
  let fixture: ComponentFixture<FieldListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldListsComponent ]
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
