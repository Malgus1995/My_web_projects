import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIdComponent } from './find-id.component';

describe('FindIdComponent', () => {
  let component: FindIdComponent;
  let fixture: ComponentFixture<FindIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
