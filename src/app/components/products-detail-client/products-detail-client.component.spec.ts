import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailClientComponent } from './products-detail-client.component';

describe('ProductsDetailClientComponent', () => {
  let component: ProductsDetailClientComponent;
  let fixture: ComponentFixture<ProductsDetailClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
