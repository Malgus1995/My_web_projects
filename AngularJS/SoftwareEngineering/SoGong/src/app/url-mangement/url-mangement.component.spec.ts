import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlMangementComponent } from './url-mangement.component';

describe('UrlMangementComponent', () => {
  let component: UrlMangementComponent;
  let fixture: ComponentFixture<UrlMangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlMangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
