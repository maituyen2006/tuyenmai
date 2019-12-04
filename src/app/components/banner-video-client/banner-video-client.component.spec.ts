import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerVideoClientComponent } from './banner-video-client.component';

describe('BannerVideoClientComponent', () => {
  let component: BannerVideoClientComponent;
  let fixture: ComponentFixture<BannerVideoClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerVideoClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerVideoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
