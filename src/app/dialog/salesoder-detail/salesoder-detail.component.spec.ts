import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesoderDetailComponent } from './salesoder-detail.component';

describe('SalesoderDetailComponent', () => {
  let component: SalesoderDetailComponent;
  let fixture: ComponentFixture<SalesoderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesoderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesoderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
