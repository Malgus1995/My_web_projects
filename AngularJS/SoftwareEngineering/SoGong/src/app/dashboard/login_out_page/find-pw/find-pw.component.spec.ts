import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPWComponent } from './find-pw.component';

describe('FindPWComponent', () => {
  let component: FindPWComponent;
  let fixture: ComponentFixture<FindPWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
