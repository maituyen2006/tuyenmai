import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner2ClientComponent } from './banner2-client.component';

describe('Banner2ClientComponent', () => {
  let component: Banner2ClientComponent;
  let fixture: ComponentFixture<Banner2ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner2ClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner2ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
