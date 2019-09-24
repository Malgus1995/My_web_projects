import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddurlComponent } from './addurl.component';

describe('AddurlComponent', () => {
  let component: AddurlComponent;
  let fixture: ComponentFixture<AddurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
