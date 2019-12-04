import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierBillComponent } from './supplier-bill.component';

describe('SupplierBillComponent', () => {
  let component: SupplierBillComponent;
  let fixture: ComponentFixture<SupplierBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
