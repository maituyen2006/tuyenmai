import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowClientComponent } from './follow-client.component';

describe('FollowClientComponent', () => {
  let component: FollowClientComponent;
  let fixture: ComponentFixture<FollowClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
