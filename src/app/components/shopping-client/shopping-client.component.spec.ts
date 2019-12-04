import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingClientComponent } from './shopping-client.component';

describe('ShoppingClientComponent', () => {
  let component: ShoppingClientComponent;
  let fixture: ComponentFixture<ShoppingClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
