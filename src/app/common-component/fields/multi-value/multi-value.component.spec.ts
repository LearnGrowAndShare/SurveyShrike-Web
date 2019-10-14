import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiValueComponent } from './multi-value.component';

describe('MultiValueComponent', () => {
  let component: MultiValueComponent;
  let fixture: ComponentFixture<MultiValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
