import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner1ClientComponent } from './banner1-client.component';

describe('Banner1ClientComponent', () => {
  let component: Banner1ClientComponent;
  let fixture: ComponentFixture<Banner1ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner1ClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner1ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
