import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogClientComponent } from './blog-client.component';

describe('BlogClientComponent', () => {
  let component: BlogClientComponent;
  let fixture: ComponentFixture<BlogClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
