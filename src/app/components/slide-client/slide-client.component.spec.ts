import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideClientComponent } from './slide-client.component';

describe('SlideClientComponent', () => {
  let component: SlideClientComponent;
  let fixture: ComponentFixture<SlideClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
