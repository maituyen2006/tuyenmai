import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesoderComponent } from './purchasesoder.component';

describe('PurchasesoderComponent', () => {
  let component: PurchasesoderComponent;
  let fixture: ComponentFixture<PurchasesoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
