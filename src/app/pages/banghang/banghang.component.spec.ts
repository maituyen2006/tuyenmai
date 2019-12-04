import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanghangComponent } from './banghang.component';

describe('BanghangComponent', () => {
  let component: BanghangComponent;
  let fixture: ComponentFixture<BanghangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanghangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanghangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
