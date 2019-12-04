import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinentLayoutComponent } from './clinent-layout.component';

describe('ClinentLayoutComponent', () => {
  let component: ClinentLayoutComponent;
  let fixture: ComponentFixture<ClinentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
