import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInsertComponent } from './supplier-insert.component';

describe('SupplierInsertComponent', () => {
  let component: SupplierInsertComponent;
  let fixture: ComponentFixture<SupplierInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
