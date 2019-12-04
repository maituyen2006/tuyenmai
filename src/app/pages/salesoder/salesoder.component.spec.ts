import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesoderComponent } from './salesoder.component';

describe('SalesoderComponent', () => {
  let component: SalesoderComponent;
  let fixture: ComponentFixture<SalesoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
